import React, { Component } from "react";
import { View, Image, Dimensions, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { DateField } from "../components/event/DateField";
import { LocationField } from "../components/event/LocationField";
import { OrginizerField } from "../components/event/OrganizerField";
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import EventBackend from "../backend/EventBackend";
import UserBackend from "../backend/UserBackend";

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '600',
        margin: 25,
        marginLeft: 0,
        marginBottom: 3
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        margin: 25,
        marginLeft: 0,
        marginBottom: 3
    },
})

class EventV extends Component<{ eventId: string }> {
    state: {
        event?: IEvent
        owner?: IUser
        loading: boolean
    } = {
            loading: true
        }

    async componentDidMount() {
        let event = await EventBackend.getEvent(this.props.eventId)
        let user = event ? await UserBackend.getUser(event.created_by) : undefined
        this.setState({
            event: event,
            owner: user,
            loading: false
        })
    }

    render(): any {
        if (this.state.loading) {
            return <ActivityIndicator />
        }

        if (!this.state.event) {
            return <Text>Could not load event</Text>
        }

        return (
            <ScrollView bounces={false}  >
                <Image
                    source={{ uri: this.state.event!.image }}
                    style={{ width: width, height: width * 9 / 16 }}
                    resizeMode={'cover'}
                />
                <View style={{ marginLeft: 25, marginRight: 25 }}>
                    <Text numberOfLines={2} style={styles.title}>{this.state.event!.name}</Text>
                    <DateField start={this.state.event!.date.start} end={this.state.event!.date.end} />
                    <LocationField name={this.state.event.location.name} address={this.state.event.location.address} />
                    {
                        this.state.owner
                            ? <OrginizerField name={this.state.owner!.name} logo={this.state.owner!.avatar ?? ''} />
                            : <OrginizerField name='Unknown user' logo='' />
                    }


                    <Text style={styles.heading}>Event Description</Text>
                    <Text style={{ fontSize: 16, marginBottom: 15 }}>{this.state.event!.description}</Text>
                </View>
            </ScrollView>
        )
    }
}

export default function EventView(eventId: string) {
    return (
        <EventV eventId='5' />
    );
}

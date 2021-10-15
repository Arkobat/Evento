import React from "react";
import { View, Image, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import { DateField } from "../components/event/DateField";
import { LocationField } from "../components/event/LocationField";
import { OrginizerField } from "../components/event/OrganizerField";

const width = Dimensions.get('window').width


interface IDiscover {
    id: string
    scale: number
    name: string
    location: {
        name: string
        address: string
    }
    date: {
        start: Date
        end: Date
    }
    orginizer: {
        name: string,
        avatar?: string
    }
    image: string
    description: string
}

const Discover = (props: IDiscover) => {
    return (
        <ScrollView bounces={false}  >
            <Image
                source={{ uri: props.image }}
                style={{ width: width, height: width * 9 / 16 }}
                resizeMode={'cover'}
            />
            <View style={{ marginLeft: 25, marginRight: 25 }}>
                <Text numberOfLines={2} style={styles.title}>{props.name}</Text>
                <DateField start={props.date.start} end={props.date.end} />
                <LocationField name={props.location.name} location={props.location.address} />
                <OrginizerField name={props.orginizer.name} logo={props.orginizer.avatar} />

                <Text style={styles.heading}>Event Description</Text>
                <Text style={{ fontSize: 16, marginBottom: 15 }}>{props.description}</Text>
            </View>
        </ScrollView>
    );
}

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

export default function EventView() {
    return (
        <Discover
            id='e1'
            scale={0.80}
            name='Beer Pong Turnering '
            location={{
                name: "Nedenunder",
                address: "Campusvej 55, Odense M"
            }}
            date={{
                start: new Date('2021-11-01T19:00:00'),
                end: new Date('2021-11-02T03:00:00')
            }}
            orginizer={{
                name: 'Nedenunder',
                avatar: 'https://www.nedenunder.dk/wp-content/uploads/2019/06/nedenunder-Logo-300x300.png'

            }}
            image='https://images.interactives.dk/beerpong-woman-dk-M_gSy7-yyJsqSjEXUI8hkQ.jpg'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ornare quam. Quisque posuere imperdiet sem at pretium. Fusce et facilisis metus, ut faucibus lectus. Suspendisse at ultricies risus. Ut id tristique risus, ut viverra arcu. Ut eu suscipit nunc, eget elementum tortor. Nunc ut lacus vitae libero tempus tempor vel sit amet magna. Ut ac erat fringilla, auctor mi eget, dictum quam. Praesent vestibulum lorem facilisis commodo facilisis. Donec a justo eget sapien tempus tincidunt sit amet ut quam. Maecenas tempor suscipit eros ac porttitor. Aliquam erat volutpat. Fusce lacinia ut mi et malesuada. Aliquam erat volutpat. Phasellus eu luctus quam, id egestas turpis.'
        />
    );
}
import React, { Component } from "react";
import { ScrollView, View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Backend from "../backend/EventBackend";
import { NearbyEvent } from "../components/NearbyEvent";
import { UpcomingEvent, IUpcomingEvent } from "../components/UpcomingEvent";

class EventList extends Component {
  state: {
    events: IUpcomingEvent[],
    loading: boolean
  } = {
      events: [],
      loading: true
    }

  async componentDidMount() {
    var loadedEvents = await Backend.GetEventOverview();
    this.setState({
      events: loadedEvents,
      loading: false
    })
  }

  render(): any {

    if (this.state.loading) {
      return <ActivityIndicator />
    }

    return (
      <SafeAreaView>
        <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 15 }}>Upcoming Events</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            this.state.events.map(event => (
              <UpcomingEvent id={event.id} date={new Date()} name={event.name} location={event.location} image={event.image} />
            ))
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const Discover = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 15 }}>Nearby You</Text>
      <NearbyEvent id='d1' date={new Date()} name='Åbnings fest - HAPPY HOUR x LIVE MUSIK' location='LA Bar' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <NearbyEvent id='d2' date={new Date()} name='Random Event #2' location='Jonathans opgang' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <NearbyEvent id='d3' date={new Date()} name='Random Event #3' location='Jonathans køkken' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <NearbyEvent id='d4' date={new Date()} name='Random Event #4' location='Jonathans stue' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <NearbyEvent id='d5' date={new Date()} name='Random Event #5' location='Jonathans seng' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <NearbyEvent id='d6' date={new Date()} name='Random Event #6' location='Nede på gaden' image='https://picsum.photos/150/100?grayscale&blur=10' />
    </View>
  );
}


export default function Explore() {
  return (
    <ScrollView>
      <EventList />
      <Discover />
    </ScrollView>
  );
}

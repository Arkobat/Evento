import React, { Component } from "react";
import { ScrollView, View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Backend from "../Backend";
import { EventPreview, IEventPreview } from "../components/EventPreview";

class EventList extends Component {
  state: {
    events: IEventPreview[],
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
    return (
      <SafeAreaView>
        <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 15 }}>Upcoming Events</Text>
        {
          this.state.loading ? <ActivityIndicator /> :
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <EventPreview id='e1' scale={0.80} name='Beer Pong Turnering' location='Nedenunder' image='https://images.interactives.dk/beerpong-woman-dk-M_gSy7-yyJsqSjEXUI8hkQ.jpg' />
              <EventPreview id='e2' scale={0.80} name='Banko' location='Storms Pakhus' image='https://picsum.photos/150/100?blur=1' />
              <EventPreview id='e3' scale={0.80} name='Software Dysten' location='SDU' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview id='e4' scale={0.80} name="Have's indflytterfest" location='Haves kærestes lejlighed' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview id='e5' scale={0.80} name='Amilcar pension fest' location='Plejehjemmet' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview id='e6' scale={0.80} name='Jonathan konfirmation' location='Jonathans forældre' image='https://picsum.photos/150/100?blur=10' />

            </ScrollView>
        }
      </SafeAreaView>
    )
  }
}

const Discover = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 15 }}>Nearby You</Text>
      <EventPreview id='d1' name='Åbnings fest - HAPPY HOUR x LIVE MUSIK' location='LA Bar' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <EventPreview id='d2' name='Random Event #2' location='Jonathans opgang' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <EventPreview id='d3' name='Random Event #3' location='Jonathans køkken' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <EventPreview id='d4' name='Random Event #4' location='Jonathans stue' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <EventPreview id='d5' name='Random Event #5' location='Jonathans seng' image='https://picsum.photos/150/100?grayscale&blur=10' />
      <EventPreview id='d6' name='Random Event #6' location='Nede på gaden' image='https://picsum.photos/150/100?grayscale&blur=10' />
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

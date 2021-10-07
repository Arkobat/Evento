import { StatusBar } from 'expo-status-bar';
import React, { Component, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Backend from './Backend';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { EventPreview, IEventPreview } from './components/EventPreview';


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
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 15 }}>Upcoming Events</Text>
        {
          this.state.loading ? <ActivityIndicator /> :
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <EventPreview name='Beer Pong' location='Nedenunder' image='https://images.interactives.dk/beerpong-woman-dk-M_gSy7-yyJsqSjEXUI8hkQ.jpg' />
              <EventPreview name='Banko' location='Storms Pakhus' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview name='Software Dysten' location='SDU' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview name="Have's indflytterfest" location='Haves kærestes lejlighed' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview name='Amilcar pension fest' location='Plejehjemmet' image='https://picsum.photos/150/100?blur=10' />
              <EventPreview name='Jonathan konfirmation' location='Jonathans forældre' image='https://picsum.photos/150/100?blur=10' />

            </ScrollView>
        }
      </View>
    )
  }
}


function Explore() {
  Backend.GetEventOverview().then(data => {
    console.log(data)
  })

  return (
    <View>
      <EventList />
      <View>
        <ScrollView>
          <EventPreview name='Random Event #1' location='LA Bar' image='https://picsum.photos/150/100?grayscale&blur=10' />
          <EventPreview name='Random Event #2' location='Jonathans opgang' image='https://picsum.photos/150/100?grayscale&blur=10' />
          <EventPreview name='Random Event #3' location='Jonathans køkken' image='https://picsum.photos/150/100?grayscale&blur=10' />
          <EventPreview name='Random Event #4' location='Jonathans stue' image='https://picsum.photos/150/100?grayscale&blur=10' />
          <EventPreview name='Random Event #5' location='Jonathans seng' image='https://picsum.photos/150/100?grayscale&blur=10' />
          <EventPreview name='Random Event #6' location='Nede på gaden' image='https://picsum.photos/150/100?grayscale&blur=10' />
        </ScrollView>
      </View>
    </View>
  );
}

function Events() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Map() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  eventPreview: {
    margin: 5,
  }
});
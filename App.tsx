import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


const EventPreview = (props: any) => {
  return (
    <View style={styles.eventPreview}>
      <Image
        source={{ uri: props.image }}
        style={{ width: 150, height: 100 }}
      />
      <Text style={{ fontWeight: 'bold' }}>{props.name}</Text>
      <Text>{props.location}</Text>
    </View>
  );
}


const App = () => {
  let randomEvent: number = 1
  return (
    <View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 15 }}>Upcoming Events</Text>
      </View>
      <View>
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
      </View>
      <View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
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

const styles = StyleSheet.create({
  eventPreview: {




    margin: 5,
  }
});

export default App
import React from 'react';

import { StyleSheet, Text, View, Image, Pressable, Alert, Dimensions } from 'react-native';
import { IUpcomingEvent } from './UpcomingEvent';
import { format } from "date-fns";


const boxMargin = 10;
const boxWidth = Dimensions.get('screen').width - boxMargin * 2
const imgWidth = boxWidth * 0.30
const imgHeight = imgWidth

function NearbyEvent(props: IUpcomingEvent) {
    return (
        <View style={[styles.card, styles.shadowProp]}>
            <View style={{ width: boxWidth }}>
                <Pressable
                    onPress={() => { Alert.alert(`Open ${props.id}`); }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: props.image }}
                            style={styles.image}
                            resizeMode={'cover'} />
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <Text style={styles.date}>{format(props.date, "d. LLL EEE - HH:mm").toUpperCase()}</Text>
                            <Text numberOfLines={1} style={styles.heading}>{props.name}</Text>

                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../assets/location-marker.png')} />
                                <Text numberOfLines={1} style={styles.location}>{props.location}</Text>
                            </View>

                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    heading: {
        width: boxWidth - imgWidth - 2 * boxMargin,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 3
    },

    date: {
        color: 'royalblue',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 3
    },

    location: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 3
    },

    image: {
        width: imgWidth,
        height: imgHeight,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    card: {
        margin: boxMargin,
        marginTop: boxMargin / 2,
        marginBottom: boxMargin / 2,
        backgroundColor: 'white',
        borderRadius: 10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

export {
    NearbyEvent
}
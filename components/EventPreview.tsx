import React from 'react';

import { StyleSheet, Text, View, Image, Pressable, Alert, Dimensions } from 'react-native';

const boxMargin = 10;
const imgWidth = Dimensions.get('window').width - boxMargin * 2
const imgHeight = imgWidth * 9 / 16

export interface IEventPreview {
    id: string
    name: string
    location: string
    image: string
    scale?: number
}

const EventPreview = (props: IEventPreview) => (
    <View style={[styles.card, styles.shadowProp]}>
        <View style={{ width: imgWidth * (props.scale ?? 1) }}>
            <Pressable
                onPress={() => { Alert.alert(`Open ${props.id}`) }}>
                <Image
                    source={{ uri: props.image }}
                    style={{ width: imgWidth * (props.scale ?? 1), height: imgHeight * (props.scale ?? 1), borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }}
                    resizeMode={'cover'} />
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Text numberOfLines={1} style={styles.heading}>{props.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image source={require('../assets/location-marker.png')} />
                        <Text numberOfLines={1}>{props.location}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    </View>
)

const styles = StyleSheet.create({

    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 3
    },
    card: {
        margin: boxMargin,
        marginTop: boxMargin / 2,
        marginBottom: boxMargin / 2,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

export {
    EventPreview
}
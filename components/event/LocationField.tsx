import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Field } from './AbstractField';
import openMap from 'react-native-open-maps';


export interface IPlaceField {
    name: string
    location: string
}

function startMap(location: string) {
    openMap({ end: location })
}

function LocationField(props: IPlaceField) {
    return (
        <Pressable onPress={() => startMap(props.location)}>
            <Field icon={{ type: 'icon', path: 'map-marker' }} children={
                <View>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.location}>{props.location}</Text>
                </View>
            } />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        marginBottom: 5
    },
    location: {
        fontSize: 12,
        fontWeight: '800',
        color: '#565656',
    }
});

export {
    LocationField
}
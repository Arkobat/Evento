import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export interface IEventPreview {
    name: string;
    location: string;
    image: string;
}

const EventPreview = (props: IEventPreview) => {
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

const styles = StyleSheet.create({
    eventPreview: {
        margin: 5,
    }
});

export {
    EventPreview
}
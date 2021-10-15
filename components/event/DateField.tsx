import React from 'react';
import { format } from "date-fns";
import { StyleSheet, Text, View, Image, Pressable, Alert, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Field } from './AbstractField';

export interface IDateField {
    start: Date
    end: Date
    location?: string
}

function DateField(props: IDateField) {
    return (
        <Field icon={{ type: 'icon', path: 'calendar' }} children={
            <View>
                <Text style={styles.date}>{format(props.start, "d. LLLL, yyyy")}</Text>
                <Text style={styles.time}>{format(props.start, 'EEEE HH:mm')} - {format(props.end, 'HH:mm')}</Text>
            </View>
        } />
    );
}
const styles = StyleSheet.create({
    date: {
        fontSize: 20,
        marginBottom: 5
    },
    time: {
        fontSize: 12,
        fontWeight: '800',
        color: '#565656',
    }
});

export {
    DateField
}
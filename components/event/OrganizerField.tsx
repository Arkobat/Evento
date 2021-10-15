import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert, Dimensions } from 'react-native';
import { Field } from './AbstractField';

export interface IOrginizerField {
    name: string
    logo: string
}

function OrginizerField(props: IOrginizerField) {
    return (
        <Field icon={{ type: 'url', path: props.logo }} children={
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.location}>Organizer</Text>
            </View>
        } />
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
    OrginizerField
}
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import openMap from 'react-native-open-maps';

interface IField {
    icon: {
        type: 'url'
        path: string
    } | {
        type: 'icon'
        path: React.ComponentProps<typeof MaterialCommunityIcons>['name']
    }
    children: JSX.Element
}

function Field(props: IField) {
    return (
        <View style={styles.box}>
            {
                props.icon.type === 'url' ?
                    <Image style={styles.logoBox} source={{ uri: props.icon.path }} /> :
                    <View style={[styles.logoBox, styles.iconBox]}>
                        <MaterialCommunityIcons name={props.icon.path} size={35} color='dodgerblue' />
                    </View>
            }
            {props.children}
        </View>
    );
}
/*

*/

const styles = StyleSheet.create({
    logoBox: {
        alignItems: "center",
        justifyContent: 'center',
        width: 50,
        height: 50,
        margin: 5,
        marginRight: 15,
    },
    iconBox: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
    },
    box: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center",
    },
});

export {
    Field
}
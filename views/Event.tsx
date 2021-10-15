import React from "react";
import { View, Image, Dimensions, Text, StyleSheet } from "react-native";

const width = Dimensions.get('window').width

const Discover = (props: any) => {
    return (
        <View>
            <Image
                source={{ uri: props.image }}
                style={{ width: width, height: width * 9 / 16 }}
                resizeMode={'cover'}
            />

            <Text numberOfLines={2} style={styles.heading}>
                {props.name}
            </Text>



        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 3
    },
})

export default function EventView() {
    return (
        // <EventPreview  />

        <Discover
            id='e1' scale={0.80} name='Beer Pong Turnering Beer Pong Turnering ' location='Nedenunder' image='https://picsum.photos/150/100' />
    );
}
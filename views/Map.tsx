import { tr } from "date-fns/locale";
import React from "react";
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

function Map() {
    return (
        <MapView
            style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            initialRegion={{
                latitude: 55.3686576,
                longitude: 10.4270591,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
}

export default function MapScreen() {
    return (
        <Map />
    );
}

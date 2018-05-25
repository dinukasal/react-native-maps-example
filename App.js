/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

type Props = {};
export default class App extends Component<Props> {
  state = {
    latitude: 20.9948891,
    longitude: 105.799677,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to react-native-maps</Text>
        <MapView style={styles.map} initialRegion={this.state}>
          <MapView.Marker coordinate={this.state} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: '#59656C',
    marginBottom: 10,
  },
  map: {
    width: 300,
    height: 300,
    flex: 1
  }
});

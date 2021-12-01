import React, {Component, useState} from 'react';
import {View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Button,
  Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { tourItems } from '../../src/tourList';
import { useNavigation } from '@react-navigation/native';

class ScreenMap extends Component {
    
  state = { tours: [] }
 

   componentDidMount() {
//    Fetch Tourlist
    this.setState({ tours: tourItems });

    
 }
  


  //TODO: MAP Markers
  mapMarkers = () => {
  

    return this.state.tours.map((tourItems) => <Marker
      key={tourItems.id}
      coordinate={{ latitude: tourItems.latitude, longitude: tourItems.longitude }}
      onPress={() => this.props.navigation.navigate('ScreenPlayer', { 
        id: tourItems.id,  
        imgPath: tourItems.imgPath })}/>
  )}



  render() {
    return (
      <View style={styles}>
      <MapView 
      style={styles.map}
      region={{
        latitude: 49.761313,
         longitude: -94.469293,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0015,
      }}>
     {this.mapMarkers()}
       </MapView>
       </View>
      );

    }
  };
  
  
  const styles = StyleSheet.create({
      map: {
        ...StyleSheet.absoluteFillObject,
        height: 700,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

   });
  
  
  export default ScreenMap;
  
import React, {useState} from 'react';
import ScreenPlayer from './components/screens/ScreenPlayer';
import ScreenMap from './components/screens/ScreenMap';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image} from 'react-native';
  
import RNBootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
 <NavigationContainer onReady={() => RNBootSplash.hide()}>
     <Stack.Navigator 
     initialRouteName='ScreenMap'
     animationEnabled='true'
     screenOptions ={{
       headerShown: false
     }}
     >
        <Stack.Screen name="ScreenMap" component={ScreenMap} />
        <Stack.Screen name="ScreenPlayer" component={ScreenPlayer} />
      </Stack.Navigator>
 </NavigationContainer>

    );
};


const styles = StyleSheet.create({
 });


export default App;

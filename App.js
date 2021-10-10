import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, ImageBackground} from 'react-native';
import ImageExpander from './components/ImageExpander';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const App = () => {

  return (
<View style={styles.mainContainer}>  
    <View style={styles.container}>
      <Header />    
      <ImageExpander />
    </View>
    <View style={styles.buttons}>
    <TouchableOpacity onPress={() => {}}> 
         <Icon 
         name="backward"
         size={50}
        color="#001219"/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}} >
           <Icon 
            name="play-circle"
            size={60}
            color="#001219"/>      
   </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
         <Icon 
         name="fast-forward"
         size={50}
         color="#001219"
          />
    </TouchableOpacity>
    </View>
    <Text style={styles.title}>Location Name</Text>
  </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    color: '#264653'
  },
  container: {
    flex: 1
  },
  buttons: {
    paddingVertical: '95%',
    position: 'absolute',
    paddingLeft: 5,
    width: '98%',    
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: 'row'
  },
  title: {
    alignContent: 'center',
    position: 'absolute',
    marginVertical: '50%',
    marginHorizontal: '50%'
  }
});

export default App;

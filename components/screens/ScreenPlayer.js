import React, {Component} from 'react';
import {View,
       Text, 
       StyleSheet, 
       TouchableOpacity, 
       Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { tourItems } from '../../src/tourList';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const ScreenPlayer = ({route, nativation}) => {  

  const {id, imgPath} = route.params;
  
  const onStartPress = async (e) => {
      
        //const path =
        audioRecorderPlayer.startPlayer(path);
        
        console.log('playing: ' + path);
        audioRecorderPlayer.setVolume(1.0);

   };
  
  
  //  const onBackward = async (e) => {
  //       // Subtract 1  tourItems.id

  //       let curr_item = tourItems[currentItem];
  //       let curr_index = tourItems.indexOf(curr_item);

  //       if(curr_index == 0) {
  //       setCurrentItem((tourItems.length - 1));
  //       }  else {
  //       setCurrentItem((curr_Item) => currentItem - 1);
  //       } // End of if
  //   }; // End of onBackward

  // const onForward = async (e) => {
  //       // add 1  tourItems.id

  //       let curr_item = tourItems[currentItem];
  //       let curr_index = tourItems.indexOf(curr_item);

  //       if((curr_index + 1) == tourItems.length) {
  //         setCurrentItem(0);
  //       }  else {
  //         setCurrentItem((curr_Item) => currentItem + 1);
  //       } // End of if
  // } // End of onForward

  return (
<View style={styles.mainContainer}>  
    <View style={styles.container}>
      
      <Image 
      source={{
        uri: imgPath
      }} 
      style={styles.img} 
      />
     
    </View>
    <View style={styles.buttons}>
    <TouchableOpacity onPress={() => onStartPress()} >
           <Icon 
            name="play-circle"
            size={60}
            color="#001219"/>      
   </TouchableOpacity>
    </View>
    <Text style={styles.title}>{}</Text>
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
    paddingLeft: '45%',
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
  },
  img: {
    alignContent: 'center',
    width: '100%',
    height: 700,
    opacity: 0.8
  }

});


export default ScreenPlayer;

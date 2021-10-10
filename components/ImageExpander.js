import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageExpander = (props) => {

  return (
    <View style={styles.img}>
        <Image 
        style={styles.img}
        source={require('../src/img1.jpg')} 
        />
    </View>
  );
};


const styles = StyleSheet.create({
  img: {
    alignContent: 'center',
    width: '100%',
    height: 700,
    opacity: 0.8
  },

  

});

export default ImageExpander;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Buttons = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[
        {
          backgroundColor: '#BA3F1D',
          width: '90%',
          height: '15%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        },
        props.style,
      ]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkred',
    width: width * 0.9,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: height * 0.04,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export {Buttons};

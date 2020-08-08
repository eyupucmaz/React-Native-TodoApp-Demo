import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Buttons = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.button, props.style]}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.04,
    backgroundColor: '#BA3F1D',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {Buttons};

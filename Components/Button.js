import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Buttons = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
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

import React from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Inputs = (props) => (
  <TextInput
    placeholder={props.placeholder}
    value={props.value}
    onChangeText={(value) => props.onChangeText(value)}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    color: '#000',
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#fcfcfc',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 7,
    paddingLeft: 10,
    marginBottom: height * 0.02,
    fontSize: 18,
  },
});

export {Inputs};

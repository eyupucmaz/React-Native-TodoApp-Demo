import React from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Inputs = (props) => (
  <TextInput
    showSoftInputOnFocus={true}
    placeholder={props.placeholder}
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    value={props.value}
    onChangeText={(value) => props.onChangeText(value)}
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  input: {
    color: '#fff',
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: height * 0.02,
    fontSize: 18,
  },
});

export {Inputs};

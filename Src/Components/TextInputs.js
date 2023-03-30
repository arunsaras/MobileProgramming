import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function TextInputs({children, placeholder, styleprop}) {
  return (
    <TextInput
      value={children}
      placeholderTextColor={'#B8B8B8'}
      placeholder={placeholder}
      style={[styles.input,styleprop]}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    color: '#000000',
    borderColor: '#6B6B6B',
    backgroundColor: '#EEEEEE',
    marginTop: 15,
    height: 40,
    minWidth: 300,
    maxHeight: '80%',
    borderWidth: 1,
    padding: 10,
    fontSize: 19,
  },
});

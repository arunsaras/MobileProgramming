import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Texts from './Text';

export default function Touchables({children, onPress, styleprop}) {
  return (
    <TouchableOpacity style={[styles.click, styleprop]} onPress={onPress}>
      <Texts style={styles.textButton} children={children} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textButton: {
    fontSize: 19,
    color: '#000000',
  },
  click: {
    marginTop: 30,
    height: 40,
    width: 150,
    borderColor: '#6B6B6B',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

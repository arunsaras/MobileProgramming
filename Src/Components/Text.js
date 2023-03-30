import {Text} from 'react-native';
import React from 'react';

export default function Texts({children, style}) {
  return <Text style={style}>{children}</Text>;
}

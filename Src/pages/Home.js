import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Texts from '../Components/Text';
import TextInputs from '../Components/TextInputs';
import Touchables from '../Components/Touchables';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Texts style={styles.textTitle} children={'Screen 1'} />
      </View>
      <TextInputs children={''} placeholder={'Table Name'} />
      <TextInputs children={''} placeholder={'Unique Column'} />
      <TextInputs children={''} placeholder={'Column Name'} />
      <Touchables
        children={'Manual Update'}
        onPress={() => navigation.navigate('screen')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 100,
  },
  textTitle: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',
  },
});

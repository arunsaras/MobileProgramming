import {View, StyleSheet} from 'react-native';
import React from 'react';
import Tables from '../Components/Tables';
import Texts from '../Components/Text';
import Touchables from '../Components/Touchables';

export default function Screens({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Texts style={styles.textTitle} children={'Screen 2'} />
      </View>
      <View style={{height: 380}}>
        <Tables />
      </View>

      <Touchables
        children={'Update'}
        onPress={() => navigation.navigate('useCase')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff', alignItems: 'center'},
  titleContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',
  },
});

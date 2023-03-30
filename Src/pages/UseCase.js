import {View, Text, FlatList, StyleSheet, Linking} from 'react-native';
import React from 'react';
import TextInputs from '../Components/TextInputs';
import Touchables from '../Components/Touchables';
import Texts from '../Components/Text';

export default function UseCase2() {
  const data = [
    {website: 'www.go-yubi.com', status: 'SUCCESS'},
    {website: 'www.google.com', status: 'SUCCESS'},
    {website: 'https://rera.goa.gov.in/reraApp/', status: 'FAILURE'},
    {website: 'https://www.linkedin.com/', status: 'SUCCESS'},
  ];

  const listHeaderComponent = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.headerItem, {borderRightWidth: 0.5}]}>
          <Texts style={styles.headerText} children={'Website'} />
        </View>
        <View style={[styles.headerItem, {borderRightWidth: 1}]}>
          <Texts style={styles.headerText} children={'Status'} />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
      <TextInputs
        children={''}
        styleprop={{backgroundColor: 'white', width: '80%'}}
        placeholder={'Enter Website here to be Monitored'}
      />
      <Touchables children={'ADD'} />
      <FlatList
        style={{marginTop: 50, padding: 6}}
        data={data}
        ListHeaderComponent={listHeaderComponent}
        renderItem={({item, index}) => {
          console.log();
          return (
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.rowItem,
                  {
                    borderLeftWidth: 1,
                    borderBottomWidth: index == data.length - 1 ? 1 : 0.5,
                  },
                ]}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  onPress={() => Linking.openURL(item.website)}
                  style={{color: '#0097A7', textDecorationLine: 'underline'}}>
                  {item.website}
                </Text>
              </View>
              <View
                style={[
                  styles.rowItem,
                  {
                    borderLeftWidth: 0.5,
                    borderRightWidth: 1,
                    borderBottomWidth: index == data.length - 1 ? 1 : 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Touchables
                  children={item.status}
                  styleprop={{
                    marginTop: 0,
                    padding: 0,
                    width: 100,
                    height: 30,
                    backgroundColor:
                      item.status == 'SUCCESS' ? '#B5D7A8' : '#F9CB9C',
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  headerItem: {
    padding: 10,
    height: 45,
    width: 190,
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#9E9E9E',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },
  headerText: {color: 'black', fontSize: 17, fontWeight: '600'},
  rowItem: {
    padding: 10,
    height: 45,
    width: 190,
    borderWidth: 0.5,
    borderColor: '#9E9E9E',
  },
  inputItem: {
    padding: 3,
    height: 45,
    width: 200,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  input: {
    color: '#000000',
    borderColor: '#6B6B6B',
    backgroundColor: '#ffffff',
    height: 37,
    width: '100%',
    borderWidth: 1.5,
    fontSize: 19,
  },
});

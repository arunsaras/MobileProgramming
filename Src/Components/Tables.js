import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Texts from './Text';

export default function Tables() {
  const data = {
    row: [
      {
        table_column: 'interview.geography_columns',
        column_name: 'city_name',
        distinct_value: 'che',
        user_Input: '',
      },
      {
        table_column: 'interview.geography_columns',
        column_name: 'city_name',
        distinct_value: 'mum',
        user_Input: '',
      },
      {
        table_column: 'interview.geography_columns',
        column_name: 'city_name',
        distinct_value: 'bangalore',
        user_Input: '',
      },
      {
        table_column: 'interview.geography_columns',
        column_name: 'city_name',
        distinct_value: 'cochin',
        user_Input: '',
      },
    ],
  };

  const listHeaderComponent = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerItem}>
          <Texts style={styles.headerText} children={'Table Name'} />
        </View>
        <View style={styles.headerItem}>
          <Texts style={styles.headerText} children={'Column Name'} />
        </View>
        <View style={[styles.headerItem, {backgroundColor: '#01FF00'}]}>
          <Texts style={styles.headerText} children={'Distinct Value'} />
        </View>
        <View
          style={[
            styles.headerItem,
            {backgroundColor: '#FF9900', borderRightWidth: 1},
          ]}>
          <Texts style={styles.headerText} children={'User Input'} />
        </View>
      </View>
    );
  };

  return (
    <View style={{marginTop: 50, paddingHorizontal: 10}}>
      <ScrollView horizontal>
        <FlatList
          ListHeaderComponent={listHeaderComponent}
          data={data.row}
          renderItem={({item, index}) => {
            console.log(Object.keys(item).length);
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.rowItem,
                    {
                      borderLeftWidth: 1,
                      borderBottomWidth:
                        index == Object.keys(item).length - 1 ? 1 : 0.5,
                    },
                  ]}>
                  <Text style={{color: 'black'}}>{item.table_column}</Text>
                </View>
                <View
                  style={[
                    styles.rowItem,
                    {
                      borderBottomWidth:
                        index == Object.keys(item).length - 1 ? 1 : 0.5,
                    },
                  ]}>
                  <Text style={{color: 'black'}}>{item.column_name}</Text>
                </View>
                <View
                  style={[
                    styles.rowItem,
                    {
                      borderBottomWidth:
                        index == Object.keys(item).length - 1 ? 1 : 0.5,
                    },
                  ]}>
                  <Text style={{color: 'black'}}>{item.distinct_value}</Text>
                </View>
                <View
                  style={[
                    styles.inputItem,
                    {
                      borderRightWidth: 1,
                      borderBottomWidth:
                        index == Object.keys(item).length - 1 ? 1 : 0.5,
                    },
                  ]}>
                  <TextInput style={styles.input} value="" />
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headerItem: {
    padding: 10,
    height: 45,
    width: 200,
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
    width: 200,
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

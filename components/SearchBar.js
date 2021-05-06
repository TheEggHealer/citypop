import React from 'react';
import { ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import SearchIcon from '../assets/svgs/search.svg';

export default function SearchBar({ hint, loading, searchButtonHandler, onChangeText }) {
  return (
    <View style={styles.searchRow}>
      <TextInput placeholder={hint} style={styles.textInput} onChangeText={onChangeText} />
      {
        loading
        ? <ActivityIndicator style={styles.loading} color="#9B9B9B"/>
        : <TouchableOpacity onPress={searchButtonHandler}>
            <SearchIcon width={30} height={30} />
          </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 2,
    padding: 10,
    fontSize: 18,
    fontFamily: 'red-hat',
    marginRight: 20,
  },
  loading: {
    width: 30,
    height: 30,
  },
});
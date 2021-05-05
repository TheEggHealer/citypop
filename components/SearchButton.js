import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function SearchButton({ title, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.button} underlayColor='#6DCAA8'>
      <View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#41A581',
    borderRadius: 15,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    elevation: 10,
    shadowOffset:{  width: 0,  height: 4, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontFamily: 'red-hat',
    fontSize: 18,
    color: '#fff',
  },
});

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.text}>Home screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'red-hat',
    fontSize: 30,
    padding: 40,
  }
});
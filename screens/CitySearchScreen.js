import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header';
import { globalStyles } from '../styles/GlobalStyles';

export default function CitySearchScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Header backButtonHandler={ () => navigation.goBack()}/>
    </View>
  )
}

const styles = StyleSheet.create({

});

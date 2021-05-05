import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo.svg';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {

  }

});

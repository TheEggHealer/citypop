import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from './AppNavigator';

const getFonts = () => Font.loadAsync({
  'red-hat': require('./assets/fonts/RedHatDisplay-Regular.ttf'),
  'red-hat-bold': require('./assets/fonts/RedHatDisplay-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.warn('Error whild loading fonts')}
      />
    )
  }
}
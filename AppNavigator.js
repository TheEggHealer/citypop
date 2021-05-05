import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import CountrySearchScreen from './screens/CountrySearchScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import HomeScreen from './screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="CitySearch" component={CitySearchScreen} />
    <Screen name="CountrySearch" component={CountrySearchScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
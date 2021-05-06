import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Header from '../components/Header';
import { globalStyles } from '../styles/GlobalStyles';
import SearchIcon from '../assets/svgs/search.svg';
import WorldIcon from '../assets/svgs/earth.svg';
import SearchButton from '../components/SearchButton';
import CityHero from '../assets/svgs/city.svg';

export default function HomeScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <Header />
      <View style={globalStyles.content}>

        {/* Search Header */}
        <View style={styles.searchHeader}>
          <SearchIcon style={ styles.icon }width={25} height={25} />
          <Text style={globalStyles.headerText}>Search</Text>
        </View>

        {/* Search Buttons */}
        <View style={styles.searchButtons}>
          <SearchButton title='By city' onPress={() => navigation.navigate('CitySearch')}/>
          <SearchButton title='By country' onPress={() => navigation.navigate('CountrySearch')}/>
        </View>

        <View style={styles.hero}>
          <CityHero />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  searchButtons: {
    marginTop: 15,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  }
});
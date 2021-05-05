import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Header from '../components/Header';
import { globalStyles } from '../styles/GlobalStyles';
import SearchIcon from '../assets/svgs/search.svg';
import WorldIcon from '../assets/svgs/earth.svg';
import SearchButton from '../components/SearchButton';

export default function HomeScreen({ navigation }) {

  const citySearchPressHandler = () => {
    navigation.navigate('CitySearch');
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={globalStyles.content}>

        {/* Search Header */}
        <View style={styles.searchHeader}>
          <SearchIcon style={ styles.icon }width={25} height={25} />
          <Text style={globalStyles.headerText} onPress={() => citySearchPressHandler()}>Search</Text>
        </View>

        {/* Search Buttons */}
        <View style={styles.searchButtons}>
          <SearchButton title='By city' onPress={() => navigation.navigate('CitySearch')}/>
          <SearchButton title='By country' onPress={() => navigation.navigate('CountrySearch')}/>
        </View>

        {/* Top 5 Header */}
        <View style={styles.searchHeader}>
          <WorldIcon style={ styles.icon }width={25} height={25} />
          <Text style={globalStyles.headerText} onPress={() => citySearchPressHandler()}>Top 5</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  icon: {
    marginRight: 5,
  },
  searchButtons: {
    marginTop: 15,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
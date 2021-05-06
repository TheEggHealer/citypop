import React from 'react'
import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CountryListItem from '../components/CountryListItem';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { globalStyles } from '../styles/GlobalStyles';
import { addCommas } from '../utils/NumberFormatter';

var searchInput = '';

export default function CountrySearchScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [countryData, setCountryData] = useState();

  // Creates an array of objects containing information about each city that was returned by the query
  const extractDataFromQuery = json => {
    const countryData = json['geonames'];

    if (countryData.length === 0) {
      setError(`Could not find a country called ${searchInput}.`);
    } else {
      setCountryData(countryData.map((city, index) => {
        return {
          key: index,
          name: city.name,
          population: addCommas(city.population),
        }
      }));
    }
  }

  // Fetch json data from GeoNames api when the user press the search button
  const searchButtonHandler = () => {
    setLoading(true);
    setError();
    console.log('Searching for country: ' + searchInput);

    fetch(`http://api.geonames.org/searchJSON?q=${searchInput}&featureClass=P&username=weknowit&style=LONG&orderby=population&cities=cities15000`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        extractDataFromQuery(json);
        setLoading(false);
      })
      .catch(e => {
        setError('An error occurred while fetching.');
        setLoading(false);
        console.log(e);
      })
  }

  return (
    <View style={globalStyles.container}>
      <Header backButtonHandler={() => navigation.goBack()} />
      <View style={styles.customContent}>
        <ScrollView style={styles.countryList}>
          <View style={styles.top}>
            <Text style={globalStyles.headerText}>Country search</Text>
            <SearchBar hint='Enter a country' loading={loading} onChangeText={text => searchInput = text} searchButtonHandler={searchButtonHandler} />
          </View>

        {/* If there is data in countryData and there is no error, show a list of all the cities */}
        {countryData && !error ?
            <View>
              {countryData.map(city => {
                return (
                  <CountryListItem city={city} key={city.key} />
                )
              })}
            </View>
            : null
          }

          {/* If there is an error, show it */}
          {error ?
            <Text style={globalStyles.errorText}>{error}</Text>
            : null
          }
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  customContent: {
    flex: 1,
  },
  top: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  countryList: {
    flex: 1,
  }
});
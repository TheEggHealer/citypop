import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header';
import { globalStyles } from '../styles/GlobalStyles';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { addCommas } from '../utils/NumberFormatter';

var searchInput = '';

export default function CitySearchScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [cityData, setCityData] = useState();

  // Gets the name, population and country from the query results
  const extractDataFromQuery = (json) => {
    const cityData = json['geonames'][0];

    if (cityData == null) {
      setError(`Could not find a city called ${searchInput}.`);
    } else {
      setCityData({
        name: cityData.name,
        population: addCommas(cityData.population),
        cityLocation: cityData.countryName,
      });
    }
  }

  // Fetch json data from GeoNames api when the user press the search button
  const searchButtonHandler = () => {
    setLoading(true);
    setError();
    console.log('Searching for city: ' + searchInput);

    fetch(`http://api.geonames.org/searchJSON?q=${searchInput}&featureClass=P&style=LONG&maxRows=1&username=weknowit`)
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
      <View style={globalStyles.content}>
        <Text style={globalStyles.headerText}>City search</Text>
        <SearchBar hint='Enter a city' loading={loading} onChangeText={text => searchInput = text} searchButtonHandler={searchButtonHandler} />

        {/* If there is data in cityData and there is no error, show the city's population */}
        {cityData && !error ? 
          <View style={styles.city}>
            <Text style={styles.cityName}>{cityData.name}, {cityData.cityLocation}</Text>
            <Text style={globalStyles.hintText}>has a population of</Text>
            <Text style={styles.cityPopulation}>{cityData.population}</Text>
          </View>
          : null
        }

        {/* If there is an error, show it */}
        {error ? 
          <View style={styles.city}>
            <Text style={globalStyles.errorText}>{error}</Text>
          </View>
          : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  city: {
    alignItems: 'center',
    marginTop: 50,
  },
  cityName: {
    fontFamily: 'red-hat',
    fontSize: 24,
    color: 'black',
    margin: 5,
  },
  cityPopulation: {
    fontFamily: 'red-hat-bold',
    fontSize: 28,
    color: 'black',
    margin: 20,
  },
});

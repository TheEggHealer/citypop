import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../components/Header';
import { globalStyles } from '../styles/GlobalStyles';
import SearchIcon from '../assets/svgs/search.svg';
import { useState } from 'react';

var searchInput = '';

export default function CitySearchScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [cityData, setCityData] = useState();


  const addCommas = num => {
    num += '';
    var x = num.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  const searchButtonHandler = () => {
    setLoading(true);
    setError();
    console.log('Searching for: ' + searchInput);

    fetch(`http://api.geonames.org/searchJSON?q=${searchInput}&style=LONG&maxRows=1&username=weknowit`)
      .then(response => {
        // Parse html response to a JSON object
        return response.json();
      })
      .then(json => {
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
        <View style={styles.searchRow}>
          <TextInput style={styles.textInput} onChangeText={text => searchInput = text} />
          {
            loading
            ? <ActivityIndicator style={styles.loading} />
            : <TouchableOpacity onPress={() => searchButtonHandler()}>
                <SearchIcon width={30} height={30} />
              </TouchableOpacity>
          }
        </View>
        {cityData && !error ? 
          <View style={styles.city}>
            <Text style={styles.cityName}>{cityData.name}, {cityData.cityLocation}</Text>
            <Text style={globalStyles.hintText}>has a population of</Text>
            <Text style={styles.cityPopulation}>{cityData.population}</Text>
          </View>
          : null
        }
        {error ? 
          <View style={styles.city}>
            <Text style={styles.error}>{error}</Text>
          </View>
          : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 2,
    padding: 10,
    fontSize: 18,
    fontFamily: 'red-hat',
    marginRight: 20,
  },
  loading: {
    width: 30,
    height: 30,
  },
  city: {
    alignItems: 'center',
    marginTop: 100,
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
  error: {
    fontFamily: 'red-hat',
    fontSize: 16,
    color: '#AD4242',
    margin: 20,
  }
});

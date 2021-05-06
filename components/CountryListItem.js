import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'

// A card with information about a city
export default function CountryListItem( { city } ) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={globalStyles.hintText}>Population of</Text>
        <Text style={styles.cityName}>{city.name}</Text>
      </View>
      <Text style={styles.cityPopulation}>{city.population}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    shadowOffset:{  width: 0,  height: 4, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,

    padding: 10,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  cityName: {
    fontFamily: 'red-hat',
    fontSize: 20,
    color: 'black',
  },
  cityPopulation: {
    fontFamily: 'red-hat-bold',
    fontSize: 22,
    color: 'black',
  }
})

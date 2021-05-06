import React from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/svgs/logo.svg';
import BackIcon from '../assets/svgs/back.svg';

export default function Header({ backButtonHandler }) {
  return (
    <View style={styles.header}>
      <LinearGradient style={styles.gradient} colors={['#85D1B6', '#41A581']}>

        {/* If backButtonHandler is defined, show a back button */}
        {typeof backButtonHandler === 'function' ?
          <TouchableOpacity onPress={backButtonHandler} style={styles.bb}>
            <BackIcon width={30} height={30} />
          </TouchableOpacity>
          : null}
        
        <Logo style={styles.logo}/>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '25%',
    padding: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    bottom: 30,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
  },
  bb: {
    position: 'absolute',
    bottom: 55,
    left: 30,
    fontSize: 14,
    color: '#fff',
  }
})

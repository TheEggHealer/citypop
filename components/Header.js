import React from 'react'
import { StyleSheet, View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/svgs/logo.svg'

export default function Header() {
  return (
    <View style={styles.header}>
      <LinearGradient style={styles.gradient} colors={['#85D1B6', '#41A581']}>
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
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
  }
})

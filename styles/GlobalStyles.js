import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  content: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },

  headerText: {
    fontFamily: 'red-hat-bold',
    fontSize: 24,
    color: 'black',
  },
  hintText: {
    fontFamily: 'red-hat',
    fontSize: 14,
    color: '#747474',
  },
  errorText: {
    fontFamily: 'red-hat',
    fontSize: 16,
    color: '#AD4242',
    margin: 20,
    textAlign: 'center',
  }
});
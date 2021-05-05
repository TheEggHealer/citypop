import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CitySearchScreen from '../screens/CitySearchScreen';
import CountrySearchScreen from '../screens/CountrySearchScreen';

const screens = {
  Home: {
    screen: HomeScreen,
  },
  CitySearch: {
    screen: CitySearchScreen,
  },
  CountrySearch: {
    screen: CountrySearchScreen,
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
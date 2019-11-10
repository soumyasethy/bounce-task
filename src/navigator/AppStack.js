import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home/Home';

export const AppStack = createStackNavigator(
  {Home},
  {
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'Home',
  },
);

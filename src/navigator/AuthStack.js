import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home/Home';
import Login from '../screens/auth/Login';

export const AuthStack = createStackNavigator(
  {Login},
  {
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'Login',
  },
);

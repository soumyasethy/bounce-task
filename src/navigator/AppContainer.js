import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation';
import {AppNavigator} from './AppNavigator';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import React from 'react';

const SwitchNavigator: NavigationContainer = createSwitchNavigator(
  {
    AppNavigator,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AppNavigator',
  },
);

const AppContainer: React.ComponentClass<AppContainerProps> = createAppContainer(
  SwitchNavigator,
);

export {AppContainer};

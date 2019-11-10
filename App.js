import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {YellowBox, Platform} from 'react-native';
import {AppContainer} from './src/navigator/AppContainer';
import {Provider} from 'mobx-react';
import {stores} from './src/stores';
import {MenuProvider} from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';

@observer
class App extends Component {
  componentDidMount(): void {
    YellowBox.ignoreWarnings([
      'Warning: componentWill',
      'Warning: Async Storage',
      'Warning: Each',
      'Warning: Functions',
      'VirtualizedLists',
    ]);
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }

  render() {
    return (
      <Provider {...stores}>
        <MenuProvider>
          <AppContainer />
        </MenuProvider>
      </Provider>
    );
  }
}

App.propTypes = {};

export default App;

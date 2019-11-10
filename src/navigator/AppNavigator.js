import React from 'react';
import {ActivityIndicator, StatusBar, View, StyleSheet} from 'react-native';

export class AppNavigator extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

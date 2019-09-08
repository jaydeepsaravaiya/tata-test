import React, { Component } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../GlobalStyles';

export default class MyMoviesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View styles={globalStyles.center}>
        <Text> MyMoviesScreen </Text>
      </View>
    );
  }
}

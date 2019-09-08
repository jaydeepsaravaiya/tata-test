import React, { Component } from 'react';
import globalStyles from './GlobalStyles';
import { View, Text ,Button } from 'native-base';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={globalStyles.center}>
        <Text> TaTa-DoCoMo's Playground. </Text>
        <Button onPress={_=>this.props.navigation.goBack()}><Text>Go Back</Text></Button>
      </View>
    );
  }
}

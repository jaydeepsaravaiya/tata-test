import React, { Component } from 'react';
import { View, Text,Button } from 'native-base';
import globalStyles from '../GlobalStyles';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>

      <View stle={globalStyles.center}>
        <Text> SettingsScreen </Text>
      </View>
      <View style={globalStyles.bottomButton} >
        <Button onPress={_=>this.props.navigation.navigate('Home')}><Text>Go Back</Text></Button>
        </View>
      </React.Fragment>
    );
  }
}

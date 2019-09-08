import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { View, Text,Button } from 'native-base';
import globalStyles from '../../GlobalStyles';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  navigateTo(screen){
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <React.Fragment>

      <View style={globalStyles.left}>
        <Text>Name:</Text>
      </View>
      <View style={styles.bottomButton}>
        <Button onPress={_=>this.props.navigation.navigate('Home')}><Text>Go Back</Text></Button>

        </View>
        </React.Fragment>
    );
  }
}
const styles=StyleSheet.create({

})
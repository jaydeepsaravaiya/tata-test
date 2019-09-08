import React, { Component } from 'react';
import {View, Button,Text, Row } from 'native-base';
import {StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  naviageTo(screenName){
    this.props.navigation.navigate(screenName);
  }
  render() {
    return (
      <View style={styles.home}>
      <Button onPress={this.naviageTo.bind(this,"Home")}><Text>Home</Text></Button>
      <Button onPress={this.naviageTo.bind(this,"Settings")}><Text>Setting</Text></Button>
      <Button onPress={this.naviageTo.bind(this,"Profile")}><Text>Profile</Text></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home:{
    flex:1,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-around'
  }
});
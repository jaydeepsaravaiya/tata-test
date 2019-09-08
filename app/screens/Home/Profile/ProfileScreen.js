import React, { Component } from 'react';
import {StyleSheet,AsyncStorage,BackHandler} from 'react-native';
import { View, Text,Button } from 'native-base';
import globalStyles from '../../GlobalStyles';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  doLogout(){
    AsyncStorage.removeItem('user').then(_=>{console.log("xxxx");BackHandler.exitApp()}).catch(console.log)
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
        <Button onPress={this.doLogout.bind(this)}><Text>Logout</Text></Button>
        </View>
        </React.Fragment>
    );
  }
}
const styles=StyleSheet.create({

})
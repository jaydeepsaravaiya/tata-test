import React, { Component } from "react";
import { StyleSheet, View,TextInput, Text, Image ,Button,KeyboardAvoidingView,Animated,AsyncStorage} from "react-native";

import {AppLoading} from 'expo';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      errors:'',
      authenticating:true,
    }
    this.checkForAlreadyLoggedInUser();
  }
  checkForAlreadyLoggedInUser(){
    AsyncStorage.getItem('user').then(user=>{
      if(user){
        this.setState({'username':'','password':''})
        this.props.navigation.navigate('LoggedInDrawerNavigator');
      }else{
        this.setState({authenticating:false})
      }
    }).catch(_=>{console.log('Error');this.setState({authenticating:false})});
  }
  componentWillMount(){
    this.animatedValue=new Animated.Value(0);
  }
  doLogin(){
    const {username,password} = this.state;
    if(username=='admin' && password=='admin'){
      AsyncStorage.setItem('user',username).then(_=>this.props.navigation.navigate('LoggedInDrawerNavigator')).catch(console.log);
      
    }else{
      this.setState({errors:'Wrong username of password.'});
      this.animatedValue.setValue(0);
      Animated.timing(this.animatedValue,{toValue:50,duration:500}).start();
    }
  }
  render() {
    const animatedErrorTextStyle={
      color:this.animatedValue.interpolate({inputRange:[0,50],outputRange:['rgb(0,0,0)','rgb(255,0,0)']})
    };
    if(this.state.authenticating){
      return(<AppLoading/>);
    }
    return (
      <View style={styles.root}>
          <KeyboardAvoidingView behavior='position' enabled>
          <Image
            source={require("../../assets/images/tata-docomo.png")}
            resizeMode={"contain"}
            style={styles.image}
          />
          <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder='Username'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
        />
          </KeyboardAvoidingView>
        <Animated.Text style={animatedErrorTextStyle}>{this.state.errors}</Animated.Text>
        <Button
          title='Login'
          style={styles.input}
          onPress={this.doLogin.bind(this)}
        />
        <Text>Try admin, admin</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

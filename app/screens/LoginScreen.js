import React, { Component } from 'react'

import globalStyles from './GlobalStyles'
import {View,Text, Button } from 'native-base'
export default class LoginScreen extends Component {
    doLogin(){
        this.props.navigation.navigate("LoggedInDrawerNavigator");
    }
    render() {
        return (
            <View style={globalStyles.center}>
                <Button onPress={this.doLogin.bind(this)}><Text>Click</Text></Button>
            </View>
        )
    }
} 
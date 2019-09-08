import React, { Component } from 'react'
import { Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import LoggedInDrawerNavigator from './LoggedInDrawerNavigator';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const RootSwitchNavigator = createSwitchNavigator({
    LoginScreen,
    LoggedInDrawerNavigator
});

export default createAppContainer(RootSwitchNavigator); 
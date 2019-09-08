import React from 'react';

import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileTabNavigator from './Profile/ProfileTabNavigator';
import Icon from '@expo/vector-icons/Ionicons';

export default HomeStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    Profile: ProfileTabNavigator
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions:(navigator) => {
        return {title:navigator.navigation.state.routeName,
            headerLeft: (
                <Icon
                  style={{ paddingLeft: 10 }}
                  onPress={() => navigator.navigation.openDrawer()}
                  name="md-menu"
                  size={30}
                />
              ),
            headerRight:(
                <Icon
                style={{paddingRight:10}}
                onPress={_=>navigator.navigation.navigate('Settings')}
                name="md-more"
                size={30}
                />
            )
        };
        //console.log(navigator.navigation.state.routes[navigator.navigation.state.index].routeName);
        //return { title: navigator.navigation.state.routes[navigator.navigation.state.index].routeName }
    },
})
import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import MoviesScreen from './MoviesScreen'
import DetailedMovieScreen from './DetailedMovieScreen'

export default MoviesStackNavigator = createStackNavigator({
    Movies:MoviesScreen,
    MovieDetail:DetailedMovieScreen
},{
    defaultNavigationOptions: navigator => {
        return ({
            headerLeft: (<Icon
                style={{ paddingLeft: 10 }}
                onPress={() => navigator.navigation.openDrawer()}
                name="md-menu"
                size={30}
            />)
        });
    }
}); 
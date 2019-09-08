import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NewsScreen from './NewsScreen';
import DetailedNewsScreen from './DetailedNewsScreen';
import Icon from '@expo/vector-icons/Ionicons';

export default NewsStackNavigator = createStackNavigator({
    News: NewsScreen,
    NewsDetail: DetailedNewsScreen
}, {
    initialRouteName: 'News',
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
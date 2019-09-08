import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeStackNavigator from './Home/HomeStackNavigator';
import NewsStackNavigator from './News/NewsStackNavigator';
import MoviesBottomTabNavigator from './Movies/MoviesBottomTabNavigator'
import AboutScreen from './AboutScreen'; 
console.log(MoviesBottomTabNavigator);
export default LoggedInDrawerNavigator =  createDrawerNavigator({
    Home:HomeStackNavigator,
    News:NewsStackNavigator,
    Movies:MoviesBottomTabNavigator,
    About:AboutScreen
})
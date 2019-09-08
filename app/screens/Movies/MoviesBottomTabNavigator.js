
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MoviesStackNavigator from './MoviesStackNavigator';
import MyMoviesScreen from './MyMoviesScreen';

export default MoviesBottomTabNavigator = createBottomTabNavigator({
    Movies:MoviesStackNavigator,
    MyMovies:MyMoviesScreen,
},{
    initialScreen:'Movies'  
});
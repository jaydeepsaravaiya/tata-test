import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';

export default ProfileTabNavigator = createMaterialTopTabNavigator({
    Profile:ProfileScreen,
    Edit:EditProfileScreen
},{
    initialRouteName:'Profile',
    defaultNavigationOptions:(navigator)=>{
        return {
            title:navigator.navigation.state.routeName,
        }
    }
});
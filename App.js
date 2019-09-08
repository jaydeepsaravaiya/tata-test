import React,{Component} from 'react';
import {View} from 'react-native';
import RootSwitchNavigator from './app/screens/RootSwitchNavigator';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
        }
    }
    componentWillMount(){
        Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        }).then(_=>this.setState({
            loading:false,
        })).catch(console.log);
    }
    render(){
        if(this.state.loading){
            return (<AppLoading/>);
        }
       return (<View style={{flex:1}}><RootSwitchNavigator/></View>);
    } 
}

import React, { Component } from 'react';
import {View, WebView,ActivityIndicator} from 'react-native';
export default class DetailedNewsScreen extends Component {
  static navigationOptions={
    title:'Details',
  }
  constructor(props){
    super(props);
    this.state={
      loading:true,
    }
  }
  componentWillMount(){
    uri = this.props.navigation.getParam('uri',null);
    this.source = uri?{uri}:{html:'<h1>NO DATA</h1>'};
  }
  doneLoading(){
    this.setState(
      {loading:false}
    )
  }
  render() {
    console.log(this.props.navigation.state.params.uri);
    return (
      <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
    <WebView source={this.source} onLoad={this.doneLoading.bind(this)}/>
      {this.state.loading && (
          <ActivityIndicator
            style={{alignSelf:'center',position:'absolute'}}
            size='large'
          />
        )}
      </View>
      
    );
  }
}

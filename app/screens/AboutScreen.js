import React, { Component } from 'react';
import {Linking} from 'react-native';
import globalStyles from './GlobalStyles';
import { Card, CardItem,Body,View, Text ,Button } from 'native-base';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={globalStyles.center}>
        <Card>
          <CardItem header>
            <Text>TaTa-DoCoMo's Playground.</Text>
          </CardItem>
          </Card>
          <Card body>
            
          <CardItem> 

            <View style={{flexDirection:"column"}}>

            <Text>
            Search worldwide news with code
            </Text>
            <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://newsapi.org')}>
  News API
</Text>
            </View>
            
          </CardItem>
          </Card>
          <Card body>
          <CardItem>
          <View style={{flexDirection:"column"}}>


          <Text>
            Search for a movie, tv show, person at
            </Text>
            <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.themoviedb.org')}>
  The Movie Database
</Text>
</View>
            
            
          </CardItem>
        </Card>
        
        <Button onPress={_=>this.props.navigation.goBack()}><Text>Go Back</Text></Button>
      </View>
    );
  }
}

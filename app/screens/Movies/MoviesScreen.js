import React, { Component } from 'react'
import globalStyles from '../GlobalStyles'
import { Button,Text, View  } from 'native-base'

export default class MoviesScreen extends Component {
    render() {
        return (
            <View styles={globalStyles.center}>
                <Text> Movies Screen </Text>
                <Button onPress={_=>this.props.navigation.navigate('MovieDetail')}><Text>Go To Details</Text></Button>
            </View>
        )
    }
}

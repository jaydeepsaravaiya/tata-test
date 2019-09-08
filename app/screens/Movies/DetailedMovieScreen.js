import React, { Component } from 'react'
import globalStyles from '../GlobalStyles';
import { Text, View } from 'react-native'

export default class DetailedMovieScreen extends Component {
    render() {
        return (
            <View styles={globalStyles.center}>
                <Text> Movie Details </Text>
            </View>
        )
    }
}

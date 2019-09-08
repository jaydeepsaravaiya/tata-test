import React, { Component } from 'react'
import globalStyles from '../GlobalStyles';
import { Text, View } from 'react-native'
import {getMovie} from '../../logic/API';
export default class DetailedMovieScreen extends Component {
    static navigationOptions={
        title:'Movie Details'
    }
    constructor(props){
        super(props);
        this.state={
            loading:true,
            json:{}
        }
    }
    componentDidMount(){
        const id =this.props.navigation.getParam('id',-1);
        this.getMovieJSON(id);
    }
    getMovieJSON(id){
        getMovie(id).then(json=>{
            this.setState({json,loading:false})
        }).catch(console.log);
    }
    render() {
        if(this.state.loading){
            return (
                <View styles={globalStyles.center}>
                    <Text> Loading Movie Details for movie-id {this.state.id}</Text>
                </View>
            )
        }
        return <View>
            <Text>
                {JSON.stringify(this.state.json)}
            </Text>
        </View>
    }
}

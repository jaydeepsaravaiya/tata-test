import React, { Component } from 'react';
import Event from '../../comp/Event';
import { FlatList ,Text,ToastAndroid} from 'react-native';
import { getEvents,getNews } from '../../logic/API';


export default class MoviesScreen extends Component {
    static navigationOptions = {
        title: 'Movies',
      }
    constructor(props){
        super(props);
        this.state={
            movies:[],
            updating:true
        }
        this.updateMovies();
    }
    updateMovies() {
        getEvents().then(movies => {
            this.setState({
                movies: movies.results,
                updating: false,
            })
        }).catch(_ => { ToastAndroid.show("Cant check for Movies.", ToastAndroid.SHORT); this.setState({ updating: false }) });
    }
    onDetailsHandler(id) {
        this.props.navigation.navigate('MovieDetail', { id });
    }
    render() {
        //console.log(this.state.movies);
        return (
            <FlatList
                style={{ flex: 1 }}
                data={this.state.movies}
                renderItem={({ item }) => <Event event={item} onUrl={this.onDetailsHandler.bind(this)} />}
                keyExtractor={item => item.poster_path}
                refreshing={this.state.updating}
                onRefresh={this.updateMovies.bind(this)}
            />
            
        )
    }
}

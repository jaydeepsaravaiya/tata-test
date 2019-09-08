import React, { Component } from 'react';
import { FlatList,ToastAndroid} from 'react-native';
import  {getNews}  from '../../logic/API';
import Article from '../../comp/Article';


export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'News',
  }
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      updating: true,
    };
    this.updateNews();
  }
  updateNews() {
    getNews().then(news => {
      this.setState({
        news:news.articles,
        updating: false,
      })
    }).catch(_ =>{ToastAndroid.show("Cant check for news.",ToastAndroid.SHORT); this.setState({ refreshing: false })});
  }
 onDetailsHandler(url){
   console.log(url);
   this.props.navigation.navigate('NewsDetail',{uri:url});
 }
  render() {
    return (
      <FlatList
          style={{ flex: 1 }}
          data={this.state.news}
          renderItem={({ item }) => <Article article={item} onUrl={this.onDetailsHandler.bind(this)}/>}
          keyExtractor={item => item.url}
          refreshing={this.state.updating}
          onRefresh={this.updateNews.bind(this)}
        />
      
    );
  }
}

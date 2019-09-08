import React from 'react';
import { View, Linking, TouchableNativeFeedback,ImageBackground } from 'react-native';
import { Text, Card, Divider, Image  } from 'react-native-elements';


export default class Event extends React.Component {

  render() {
    const {
      popularity,
      vote_count,
      video,
      poster_path,
      id,
      adult,
      backdrop_path,
      original_language,
      original_title,
      genre_ids,
      title,
      vote_average,
      overview,
      release_date
    } = this.props.event;
    const { noteStyle, featuredTitleStyle } = styles;

    const BASE_URL = "https://image.tmdb.org/t/p/w200";
    return (
      <TouchableNativeFeedback
        useForeground
      //onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitleStyle={featuredTitleStyle}
        >
          <Text style={featuredTitleStyle}>{title}</Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ flex: 4, marginBottom: 10 }}>
              {overview || 'Read More..'}
            </Text>
            <ImageBackground style={{flex:1,width:'100%',height:'100%'}} source={{ uri: BASE_URL + poster_path }}>
              {/* <View style={{ flex: 1 }}>
                <Image style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#ff0000' }} source={{ uri: BASE_URL + poster_path }}>
                </Image>
              </View> */}
            </ImageBackground>
          </View>

          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{"ABC"}</Text>
            <Text style={noteStyle}>{"Release : " + release_date}</Text>
          </View>

        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 15

  }
};
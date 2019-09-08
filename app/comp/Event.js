import React from 'react';
import { TouchableNativeFeedback,Image } from 'react-native';
import { Text, View, CardItem,Card,Body } from 'native-base';


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

    const BASE_URL = "https://image.tmdb.org/t/p/w200";
    return (
      <TouchableNativeFeedback
        useForeground
        onPress={_ => this.props.onUrl(id)}
      >
        <Card>
          <CardItem header>
            <Text>

            {title}
            </Text>
          </CardItem>
          <View style={{flex:1,flexDirection:'row', justifyContent:'center',alignContent:'space-between'}}>
            <CardItem style={{flex:2}}>
              <Body><Text>
                {overview}
              </Text>
              </Body>
            </CardItem>
            <CardItem style={{flex:1, alignContent:'stretch'}}>
            <Image source={{uri: BASE_URL + poster_path}} style={{ flex: 1,height:150}}/>

            </CardItem>
          </View>
          <CardItem footer bordered>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.noteStyle}>{"Relase on:"}</Text>
              <Text style={styles.noteStyle}>{release_date}</Text>
            </View>
          </CardItem>
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
};



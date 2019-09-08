import React from 'react';
import { View,  TouchableNativeFeedback,Image } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const time = publishedAt;


    return (
      <TouchableNativeFeedback
        useForeground
        onPress={ _=> this.props.onUrl(url)}
      >
        <Card>
          <CardItem header>
            <Text>
              {title}
            </Text>
          </CardItem>
          <CardItem cardBody>
          <Image source={{uri: urlToImage}} style={{height: 200, width: null, flex: 1}}/>
         
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {description}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text style={styles.noteStyle}>{source.name.toUpperCase()}</Text>
                <Text style={styles.noteStyle}>{time}</Text>
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
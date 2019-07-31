import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import { Header, InputGroup, Input, Icon, Button } from 'native-base';

import bg from '../../../assets/bg/bg.png';
import next from '../../../assets/botão_avançar/next.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    fontWeight: 'bold'
  },
  textContainer: {
    marginHorizontal: 35
  },
  input: {
    marginTop: 10,
    borderBottomColor: '#EEE',
    borderBottomWidth: 2,
    textDecorationColor: '#EEE',
    color: '#EEE'
  }
});

export default class SignUp extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    types: []
  };

  async componentDidMount() {
    const typeResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/types.json'
    );

    const { results } = await typeResponse.json();

    this.setState({ types: results });
  }

  render() {
    const { name } = this.props.navigation.state.params;

    console.log(name);
    return (
      <View style={styles.container}>
        {/* <Header searchBar rounded>
          <InputGroup>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </InputGroup>
          <Button transparent>Search</Button>
        </Header> */}
        <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
          <View style={styles.textContainer}>
            <Text
              style={{
                marginBottom: 100,
                marginTop: 90,
                fontSize: 22,
                color: '#EEE'
              }}
            >
              {`Hello, trainer ${name}!`}
            </Text>
            <Text style={{ marginTop: 10, color: '#EEE', fontSize: 16 }}>
              ...now tell us which is your favorite Pokémon type:
            </Text>

            <Picker
              // selectedValue={this.state.language}
              style={styles.input}
              // onValueChange={(itemValue, itemIndex) =>
              //   this.setState({ language: itemValue })
              // }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: 25,
              backgroundColor: 'transparent'
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Image
                style={{
                  width: 48,
                  height: 48
                }}
                source={next}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import bg from '../../assets/bg/bg.png';
import next from '../../assets/botão_avançar/next.png';

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

export default class App extends Component {
  state = {
    name: ''
  };

  _handleName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <View style={styles.container}>
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
              Let's meet each other first?
            </Text>
            <Text style={{ marginTop: 10, color: '#EEE', fontSize: 16 }}>
              First we need to now your name...
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={this._handleName}
              value={this.state.name}
            />
          </View>
          <View
            style={{
              flex: 1,
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

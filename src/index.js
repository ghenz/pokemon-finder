import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';

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
        <ImageBackground
          source={require('./assets/bg/xhdpi/bg.png')}
          style={{ width: '100%', height: '100%' }}
        >
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
              We need to now your name...
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={this._handleName}
              value={this.state.name}
            />
          </View>
          <Image source={require('./assets/botão_avançar/xhdpi/next.png')} />
        </ImageBackground>
      </View>
    );
  }
}

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
    borderBottomColor: '#EEE',
    borderBottomWidth: 2,
    textDecorationColor: '#EEE',
    color: '#EEE'
  }
});

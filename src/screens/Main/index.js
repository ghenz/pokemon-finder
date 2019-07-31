import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import Bg from '../../assets/bg/bg.png';
import Pokemon from '../../assets/logo/pokemon/pokemon_logo.png';
import Finder from '../../assets/logo/finder/finder.png';
import Pikachu from '../../assets/pikachu/pikachu_dab.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground source={Bg} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Image source={Pokemon} />
          <Image source={Finder} />

          <View style={{ flex: 2, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F11E76',
                height: 34,
                width: 220,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 16
                }}
              >
                {' '}
                Let's go!
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 165
            }}
          >
            <Image source={Pikachu} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

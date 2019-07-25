import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {
  state = {
    pokemons: {}
  };
  async componentDidMount() {
    const response = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json'
    );

    const responseJson = await response.json();

    this.setState({ pokemons: responseJson });
    console.log(this.state.pokemons);
  }

  render() {
    return (
      <View>
        <Text> Hello </Text>
      </View>
    );
  }
}

import React, { Component } from 'react';

import { View, FlatList } from 'react-native';

import Pokemon from '../../components/Pokemon';

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

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <Pokemon name={item.name} uri={item.thumbnailImage} />
  );

  render() {
    return (
      <View>
        {this.state.pokemons && (
          <FlatList
            data={this.state.pokemons}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        )}
      </View>
    );
  }
}

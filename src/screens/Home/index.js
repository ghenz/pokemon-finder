import React, { Component } from 'react';

import { View, FlatList, ScrollView } from 'react-native';

import Pokemon from '../../components/Pokemon';
import PokemonType from '../../components/PokemonType';
// import { Container } from './styles';

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#18c7a2'
    }
  };
  state = {
    pokemons: false,
    filtred: false,
    types: false
  };
  async componentDidMount() {
    const pokemonResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json'
    );

    const pokemonJson = await pokemonResponse.json();

    console.log(pokemonJson);

    const typeResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/types.json'
    );

    const { results } = await typeResponse.json();

    this.setState({
      pokemons: pokemonJson,
      filtred: pokemonJson,
      types: results
    });
  }

  renderItem = ({ item }) => (
    <Pokemon key={item.id} name={item.name} uri={item.thumbnailImage} />
  );

  filterTypes(type) {
    this.setState(prevState => ({
      filtred: prevState.pokemons.filter(pokemon => {
        return pokemon.type == type;
      })
    }));

    console.log(this.state.filtred);
  }

  render() {
    return (
      <View style={{ marginBottom: 45, backgroundColor: '#FFFFFF' }}>
        <ScrollView horizontal={true}>
          {this.state.types &&
            this.state.types.map(type => (
              <PokemonType
                key={type.name}
                uri={type.thumbnailImage}
                name={type.name}
                onPress={() => this.filterTypes(type.name)}
              />
            ))}
        </ScrollView>
        {this.state.pokemons && (
          <FlatList data={this.state.filtred} renderItem={this.renderItem} />
        )}
      </View>
    );
  }
}

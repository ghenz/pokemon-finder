import React, { Component } from 'react';
import { View, FlatList, ScrollView, TextInput, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Pokemon from '../../components/Pokemon';
import PokemonType from '../../components/PokemonType';

import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    pokemons: [],
    filtered: [],
    search: false,
    searching: false,
    types: []
  };
  async componentDidMount() {
    this.getTypes();

    this.getPokemons();
  }

  getPokemons = async () => {
    const pokemonResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json'
    );

    const pokemons = await pokemonResponse.json();

    console.log(pokemons);

    this.setState({
      pokemons,
      filtered: pokemons
    });
  };

  getTypes = async () => {
    const typeResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/types.json'
    );

    const { results } = await typeResponse.json();

    this.setState({
      types: results
    });
  };

  renderItem = ({ item }) => (
    <Pokemon name={item.name} uri={item.thumbnailImage} />
  );

  filterTypes = type => {
    this.setState(prevState => ({
      search: false,
      filtered: [...prevState.pokemons].filter(pokemon => {
        return pokemon.type.indexOf(type) !== -1;
      })
    }));
    console.log(this.state.filtered);
  };

  search = e => {
    this.setState(prevState => ({
      search: [...prevState.filtered].filter(pokemon => {
        return pokemon.name.includes(e) || pokemon.slug.includes(e);
      })
    }));
    console.log(this.state.search);
  };

  render() {
    return (
      <View>
        <View style={styles.searchBar}>
          {this.state.searching ? (
            <View style={{ width: '90%' }}>
              {/* <Icon name="search" size={10} /> */}
              <SearchBar
                inputContainerStyle={styles.inputSearch}
                placeholder="Search..."
                onChangeText={this.search}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  width: '100%',
                  margin: 3
                }}
                onCancel={() => this.setState({ searching: false })}
              />
              {/* <TextInput
                onChangeText={this.search}
                inlineImageLeft="search_icon"
                style={styles.inputSearch}
              /> */}
            </View>
          ) : (
            <Button
              onPress={() => this.setState({ searching: true })}
              title="Search"
            />
          )}
        </View>

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
        {!this.state.search ? (
          <FlatList
            data={this.state.filtered}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => String(index)}
          />
        ) : (
          <FlatList
            data={this.state.search}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => String(index)}
          />
        )}
      </View>
    );
  }
}

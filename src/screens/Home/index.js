import React, { Component } from 'react';

import { View, FlatList, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

import Pokemon from '../../components/Pokemon';
import PokemonType from '../../components/PokemonType';
// import { Container } from './styles';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: '#18c7a2'
    }
  };
  state = {
    pokemons: [],
    filtered: [],
    types: []
  };
  async componentDidMount() {
    const pokemonResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json'
    );

    const pokemons = await pokemonResponse.json();

    console.log(pokemons);

    // const pokemons = pokemonJson.filter(
    //   (pokemon, index, uniques) =>
    //     uniques.map(e => e['id']).indexOf(pokemon['id']) === index
    // );

    // console.log(pokemons);

    const typeResponse = await fetch(
      'https://vortigo.blob.core.windows.net/files/pokemon/data/types.json'
    );

    const { results } = await typeResponse.json();

    this.setState({
      pokemons,
      filtered: pokemons,
      types: results
    });
  }

  renderItem = ({ item }) => (
    <Pokemon name={item.name} uri={item.thumbnailImage} />
  );

  filterTypes(type) {
    this.setState(prevState => ({
      filtered: [...prevState.pokemons].filter(pokemon => {
        return pokemon.type.indexOf(type) !== -1;
      })
    }));

    console.log(this.state.filtered);
  }

  render() {
    return (
      <Container /*style={{ backgroundColor: '#FFFFFF' }}*/>
        <Header
          searchBar
          rounded
          androidStatusBarColor="#18c7a2"
          style={{ backgroundColor: '#18c7a2' }}
        >
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        {/* <ScrollView horizontal={true}>
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
          <FlatList
            data={this.state.filtered}
            renderItem={this.renderItem}
            // keyExtractor={item => String(item.id)}
          />
        )} */}
      </Container>
    );
  }
}

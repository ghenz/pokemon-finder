import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

// import { Container } from './styles';
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const PokemonTypes = props => (
  <View style={{ margin: 6, alignItems: 'center', padding: 5 }}>
    <TouchableOpacity onPress={props.onPress}>
      <Image source={{ uri: props.uri }} style={{ height: 50, width: 50 }} />
    </TouchableOpacity>
    <Text style={{ margin: 7, color: '#1B1B1B' }}>
      {props.name.capitalize()}
    </Text>
  </View>
);

export default PokemonTypes;

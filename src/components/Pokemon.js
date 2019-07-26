import React from 'react';
import { View, Image, Text } from 'react-native';

// import { Container } from './styles';

const Pokemon = props => (
  <View>
    <Image source={{ uri: props.uri }} style={{ height: 50, width: 50 }} />
    <Text>{props.name}</Text>
  </View>
);

export default Pokemon;

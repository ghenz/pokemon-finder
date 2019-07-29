import React from 'react';
import { View, Image, Text } from 'react-native';

// import { Container } from './styles';

const Pokemon = props => (
  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
    <Image
      source={{ uri: props.uri }}
      style={{
        height: 50,
        width: 50,
        marginLeft: 5,
        borderRadius: 40,
        backgroundColor: '#588cdc'
      }}
    />
    <Text style={{ marginLeft: 10, color: '#4a4a4a' }}>{props.name}</Text>
  </View>
);

export default Pokemon;

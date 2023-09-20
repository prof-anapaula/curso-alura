import React from 'react';
import {StyleSheet, Image, Dimensions, Text} from 'react-native';

import topo from '../../Assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
  return <>
  <Image source = {topo} style={estilos.topo}/>
  <Text>Detalhes da Cesta</Text>
  </>
}

const estilos = StyleSheet.create({
  topo:{
    width: "100%",
    height: 578 / 768 * width,
  }
})

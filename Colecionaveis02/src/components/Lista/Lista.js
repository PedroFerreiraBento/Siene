import React from 'react';
import { Image, Text, View } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';


const Lista = ({item}) => {

  return (
    <View style={estiloLista.areaItens}>



      <Text style={estiloLista.itemSubtitulo}>{item.autor} ({item.anoPublicacao})</Text>

        <Image source={{uri: item.foto}} style={estiloLista.itemFoto} resizeMode="contain" />


    </View>
  );
}

export default Lista;
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer'
import { Image, Text, View } from 'react-native';


const DrawerPersonalizado = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  );
}

export default DrawerPersonalizado;
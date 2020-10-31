import React from "react";
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial: { name: 'home' },
  Colecao: { name: 'storage' },
  Perfil: { name: 'person' },
  Contato: { name: 'call' },
}

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        activeTintColor: '#618ECB' 
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const { name } = icones[route.name]
          return <MaterialIcons name={name} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
      />
      <Tab.Screen 
        name="Contato" 
        component={Colecao}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerTab: {
    backgroundColor: '#fff',
    height: 80
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default RotasTab;
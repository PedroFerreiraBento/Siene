import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import estiloInicial from './estiloInicial';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if (!isDrawerOpen) {
            navigation.openDrawer();
        }
    }

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>

            <View style={estiloInicial.header}>
                <Text style={estiloInicial.texto}>Inicial</Text>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={18} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={estiloInicial.containerC}>
                <View style={estiloInicial.fundo}>
                    <ScrollView style={estiloInicial.scrollver}>
                        <View style={estiloInicial.fundo}>

                    <AntDesign name="star" size={60} color="#9ac3f7" />
                    <Text style={{fontWeight: "bold"}}>Aprenda mais sobre o universo</Text>
                    <Text>Aqui você poderá aprender sobre as estrelas, os planetas e todo o universo em geral de forma divertida e fácil.</Text>

                    <AntDesign name="team" size={60} color="#9ac3f7" />
                    <Text style={{fontWeight: "bold"}}>Nosso Objetivo</Text>
                    <Text>Para ajudar crianças com autismo nível 1 a desenvolver suas habilidades proporcionaremos aqui, um ambiente agradável e confortável, que não se sintam mal em relação a cores e sons, à medida que aprendam sobre astronomia.</Text>

                    <AntDesign name="team" size={60} color="#9ac3f7" />
                    <Text style={{fontWeight: "bold"}}>Embarque nessa com a gente</Text>
                    <Text>Se encante com histórias sobre o mágico universo que vivemos; viva aventuras emocionantes com o Sin, nosso mascote, e torne a sala de aula um lugar mais prazeroso.</Text>
                </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Inicial;

import React from 'react';
import { ScrollView, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

function Perfil({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        

        <View style={estiloPerfil.container}>
            
            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={estiloPerfil.texto}>Perfil</Text>
                {/* <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={18} color="#fff" />
                </TouchableOpacity> */}
            </View>

            <ScrollView>

                <View style={estiloPerfil.borda}>
                    <Text style={estiloPerfil.texto2}>Turma: 3° MIB</Text>
                    <Text style={estiloPerfil.texto2}>Laysla Rebeca Alves Ribeiro</Text>
                    <Image
                        style={estiloPerfil.imagemPerfil}
                        source={require('../../../assets/imagens/laysla.jpg')}
                        />
                    <Text style={estiloPerfil.texto2}>Juliana da Silva Mendes de Moura</Text>
                    <Image
                        style={estiloPerfil.imagemPerfil}
                        source={require('../../../assets/imagens/ju.jpg')}
                        />
                    <Text style={estiloPerfil.texto2}>Andressa Oliveira dos Santos</Text>
                    <Image
                        style={estiloPerfil.imagemPerfil}
                        source={require('../../../assets/imagens/andressa.jpg')}
                        />
                    <Text style={estiloPerfil.texto2}>Pedro Herique Ferreira Bento</Text>
                    <Image
                        style={estiloPerfil.imagemPerfil}
                        source={require('../../../assets/imagens/pedro.jpg')}
                        />
                
                </View >
            </ScrollView>
        </View>
    )
}

export default Perfil;

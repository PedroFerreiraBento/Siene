import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,TextInput, Alert, SafeAreaView } from 'react-native';
import Lista from '../../components/Lista/Lista';
import estiloColecao from './estiloColecao';
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

function Colecao({ navigation, route }) {

const voltar = () => {
navigation.navigate('Inicial')
}
return (
<View style={estiloColecao.container}>

	<View style={estiloColecao.header}>
		<TouchableOpacity onPress={voltar}>
			<MaterialIcons name="arrow-back" size={24} color="#fff" />
		</TouchableOpacity>
		<Text style={estiloColecao.texto}>Contato</Text>
	</View>
	
	<View style={estiloColecao.formularioC}>

	<View style={estiloColecao.formulario}>
		<View style={estiloColecao.campoContainer}>
			<MaterialIcons name="person" size={24} color="#2d2d2d" />
			<TextInput
			placeholderTextColor="#666"
			style={estiloColecao.campo}
			placeholder="Nome"
			/>
		</View>

		<View style={estiloColecao.campoContainer}>
			<MaterialIcons name="mail" size={24} color="#2d2d2d" />
			<TextInput
			placeholderTextColor="#666"
			style={estiloColecao.campo}
			placeholder="Email"
			/>
		</View>

        <View style={estiloColecao.campoContainer}>
			<MaterialIcons name="chat" size={24} color="#2d2d2d" />
			<TextInput
			placeholderTextColor="#666"
			style={estiloColecao.campoMens}
            placeholder="Escreva sua mensagem aqui"
			/>
		</View>

		<View style={estiloColecao.buttonsC}>
			<TouchableOpacity onPress={voltar} style={estiloColecao.campoBotao}>
				<LinearGradient colors={['#A1C3F2', '#9DB1EA']} style={estiloColecao.botaoLinearGradient}>
					<Text style={estiloColecao.botaoTexto}>Enviar</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	</View>
	</View>
</View>
	)
}
export default Colecao;

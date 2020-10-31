import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <View style={estiloLogin.header}>    
                <Text style={estiloLogin.texto}>Login</Text>
                <MaterialIcons name="arrow-back" size={24} color="#9ac3f7" />
            </View>
            <View style={estiloLogin.fundo}>

                

                <View style={estiloLogin.logoContainer}>
                    <LinearGradient colors={['#A1C3F2', '#9DB1EA' ]} style={estiloLogin.logo}>
                        <AntDesign name="rest" size={50} color="#FFF" />
                    </LinearGradient>
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="person" size={24} color="#2d2d2d" />
                    <TextInput
                        placeholderTextColor="#666"
                        style={estiloLogin.campo}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login}
                    />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="vpn-key" size={24} color="#2d2d2d" />
                    <TextInput
                        placeholderTextColor="#666"
                        style={estiloLogin.campo}
                        placeholder="Senha"
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                    />
                </View>

                <View style={estiloLogin.buttonsC}>
                    <TouchableOpacity onPress={entrar}>
                        <LinearGradient colors={['#A1C3F2', '#9DB1EA']} style={estiloLogin.botaoLinearGradient}>
                            <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={entrar}>
                        <LinearGradient colors={['#A1C3F2', '#9DB1EA']} style={estiloLogin.botaoLinearGradient}>
                            <Text style={estiloLogin.botaoTexto}>Cadastro</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;

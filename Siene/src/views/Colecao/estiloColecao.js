import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#f2f2f2',
      paddingTop: Constants.statusBarHeight,
      justifyContent: "center"
   },
   header: {
      height: 50,
      width: "100%",
      backgroundColor: '#9ac3f7',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5
   },
   texto: {
      padding: 15,
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: "bold"
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
   campoContainer: {
      flexDirection: 'row',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center',
       width: '100%',
   },
   campo: {
      color: '#2d2d2d',
      fontSize: 18,
      marginLeft: 15,
      paddingBottom: 10,
      borderWidth: 1,
      borderRadius: 5,
      textAlignVertical: "center",
      borderColor: '#2d2d2d',
      flex: 1,
      alignItems: "center"
    },
    campoMens: {
      color: '#2d2d2d',
      fontSize: 18,
      marginLeft: 15,
      paddingBottom: 100,
      borderWidth: 1,
      borderRadius: 5,
      textAlignVertical: "center",
      borderColor: '#2d2d2d',
      flex: 1,
      alignItems: "center"
    },
   botaoLinearGradient: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 10, marginRight: 10,
      height: 40,
      paddingHorizontal: 15,
      borderRadius: 8,
      width: '100%',
      justifyContent: "center",
      textAlign: "center"
   },
   botaoTexto: {
      fontSize: 18,
      color: '#fff',
      backgroundColor: 'transparent'
   },
   buttonsC: {
       width: '100%',
      justifyContent: "center",
      flexDirection: "row"
   },
   formulario:{
       flex:1,
       width: '80%',
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
   },
   formularioC:{
       flex:1,
       width: '100%',
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center"
   },
   campoBotao: {
       width: '100%',

   }
});

  export default estiloColecao;
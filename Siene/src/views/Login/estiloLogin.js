import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const estiloLogin = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#f2f2f2',
      paddingTop: Constants.statusBarHeight        
   },
   fundo: {
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#f2f2f2',
    },
   logoContainer: {
      alignItems: 'center',
      marginBottom: 30,
      marginTop: 30
   },
   logo: {
      width: 90,
      height: 90,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   campoContainer: {
      flexDirection: 'row',
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center',
   },
   campo: {
      color: '#2d2d2d',
      fontSize: 18,
      marginLeft: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: '#2d2d2d',
      flex: 1
    },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoLinearGradient: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 10, marginRight: 10,
      height: 50,
      paddingHorizontal: 15,
      borderRadius: 8,
      width: 100,
      justifyContent: "center",
      textAlign: "center"
   },
   botaoTexto: {
      fontSize: 18,
      color: '#fff',
      backgroundColor: 'transparent'
   },
   header: {
      height: 50,
      backgroundColor: '#9ac3f7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      padding: 5
   },
   texto: { 
      padding: 15,
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: "bold"
   },
   buttonsC: {
      flex:1,
      justifyContent: "center",
      flexDirection: "row"
   },
});

  export default estiloLogin;
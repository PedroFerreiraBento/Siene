import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const estiloPerfil = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#f2f2f2',
      paddingTop: Constants.statusBarHeight    
   },
   borda: {   
    flex: 1,
      backgroundColor: '#f2f2f2',  
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: "scroll"
   },
   header: {
      height: 50,
      backgroundColor: '#9ac3f7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "flex-start",
      padding: 5
   },
   imagemPerfil: {
      width: 150,
      height: 250,
      borderRadius: 10
   },
   texto: {
      padding: 15,
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: "bold"
   },
   texto2: {
      fontSize: 18,
      color: '#555',
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
    botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
    
});

  export default estiloPerfil;
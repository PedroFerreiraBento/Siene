import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
      width:"100%",
      paddingTop: Constants.statusBarHeight,
   },
   containerC: {   
      width:"100%",
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
   },
   header: {
      height: 50,
      width: "100%",
      backgroundColor: '#9ac3f7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      padding: 5
   },
   fundo: {   
      backgroundColor: '#f2f2f2',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
      height: '100%',
   },
   scrollver:{
      width: '60%',
   },
   texto: {
      padding: 15,
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: "bold"
   },
   botaoBackground: {
      width: 140,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#14417b'
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloInicial;
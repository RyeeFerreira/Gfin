import { StyleSheet} from "react-native";



export const styles = StyleSheet.create({
    inputError: {
        borderColor: "red",
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    container: {
      flex: 1, 
      padding: 25,
      marginTop: 30,
    },

    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },

    voltar: {
      flexDirection: 'row',
    },
    
    voltarTexto: {
      fontSize: 20,
      marginLeft: 5,
      color: '#FFFFFF',
      fontFamily: "InrianSans",
    },

    logo: {
      width: 45,
      height: 45,
      borderRadius: 100,
      alignItems: 'center', 
      marginTop:14
    },

    titulo: {
      fontSize: 37,
      textAlign: 'left',
      color: '#FFFFFF',
      marginBottom: '60%',
      marginTop: 8,
      fontFamily: "InrianSans",
    },

    form: {
      marginBottom: 30,
    }, 

    label: {
        color: '#FFFFFF', // Cor do texto do label
        fontSize: 16,
        marginBottom: 8, 
        fontWeight: 'light',
        fontFamily: "InrianSans",
    },

    input: {
      backgroundColor: '#1A1913',
      color: '#D2D2D2',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 15,
      marginBottom: 1,
      fontFamily: "InrianSans",
      fontSize: 16,
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1A1913',
      borderRadius: 8,
      marginBottom: 1,
      fontFamily: "InrianSans",
    },

    inputComIcone: {
      flex: 1,
      color: '#D2D2D2',
      paddingHorizontal: 15,
      paddingVertical: 15,
      fontFamily: "InrianSans",
    },
    
    icon: {
      paddingHorizontal: 10,
    }, 

    btn: {
      backgroundColor: "#0097B2",
      borderColor:  "#0097C0",
      borderWidth: 0.5,
      width: "70%",
      height: "7%",
      marginTop: "15%",
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },

    botaoCadastrar: {
      backgroundColor: '#034E5E',
      paddingVertical: 15,
      borderRadius: 6,
      marginTop:'10%',
      //width:'50%',
      alignItems: 'center',
    },

    botaoTexto: {
      color: '#D2D2D2',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: "InrianSans"
    },

    buttonDisabled:{
        backgroundColor: '#5A5A5A',
    }
  });
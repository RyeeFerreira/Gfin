import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1, // Garante que o conteúdo ocupe espaço para rolagem
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //fontFamily: "InrianSans",
    },
    header: {
        paddingTop: 20,
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "red",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    body: {
        padding: 25,
    },
    saldo: {},
    grafico: {
        width: "90%",
        height: 220,
    },

    //Historico
    historico: {
        marginTop: 20,   
    },

    titulo: {
        fontSize: 17,
        color: '#FFFFFF',
        fontFamily: "InrianSans",
    },

    headerHistorico: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    link: {
        color: "#FFFEFE",
        fontFamily: "InrianSans",
        fontSize: 15,
        textDecorationLine: 'underline'
    },

    itensHistorico: {
        color: "#FFFEFE",
        marginBottom: 3,
        paddingTop:13,
        paddingBottom:13,
        backgroundColor: "#2B2825",
        flexDirection: 'row',
        //width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        borderRadius: 10,
    },

    nomeCategoria: {
        color: "#FFFEFE",
        fontFamily: "InrianSans",
        flex: 1,
        marginLeft: 10,
    },

    valor: {
        color: "#FFFEFE",
        fontFamily: "InrianSans",
        textAlign: 'right',
        marginRight: 25,
        fontSize: 16,
    },

    botaoCadastrar: {
        marginTop: 14,
        backgroundColor: "#005E72",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        //vai ficar sem porcentagem, pois ta bugando a tela, depois ajeito 
        width: '35%',
        height: 40,       
    },

    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: "InrianSans"
    },
});
import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
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
        marginTop: '30%',
    },

    logo: {
        marginLeft: 'auto', //melhorar
        marginRight: 'auto',
        width: '30%',
        height: '15%',
        borderRadius: 100,
        marginBottom: "15%"
    },

    form: {
        marginBottom: '2%'
    },

    label: {
        color: '#FFFFFF', // Cor do texto do label
        fontSize: 16,
        marginBottom: '5%',
        fontWeight: 'light',
        fontFamily: "InrianSans",
    },

    input: {
        backgroundColor: '#1A1913',
        color: '#D2D2D2',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 15,
        marginBottom: '5%',
        fontFamily: "InrianSans",
        fontSize: 16,
    },

    grupo3: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "10%",
    },

    link: {
        color: "#FFFEFE",
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowColor: "#007AFF",
        textShadowRadius: 5,
        fontFamily: "InrianSans",
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    button: {
        margin: 'auto',
        backgroundColor: "#005E72",
        borderWidth: 0.5,
        width: "70%",
        height: "7.5%",
        marginTop: "15%",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "InrianSans",
    },

    buttonDisabled: {
        backgroundColor: '#5A5A5A',
    }
});
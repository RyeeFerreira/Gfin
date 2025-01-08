import {StyleSheet } from "react-native";




export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#2E2A2A",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontFamily: "InrianSans"
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 70
    },

    grupo1: {
        marginTop: "45%",
        width: "90%",
        height: "7%"
    },

    grupo2: {
        marginTop: "15%",
        width: "90%",
        height: "7%"
    },

    label: {
        color: "#D7CCCC",
        fontSize: 16,
        fontFamily: "InrianSans",
        margin: "1%"
    },

    input: {
        height: "100%",
        backgroundColor: "#555555",
        borderRadius: 10,
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
        fontSize: 15
    },


    button: {
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

    buttonText: {
        fontFamily: "InrianSans",
        color: "#FFFEFE",
        fontSize: 24
    },

    buttonDisabled:{
        backgroundColor: '#CCCCCC',
    }
});
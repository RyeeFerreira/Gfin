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
        marginTop: '10%',
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

    titulo: {
        fontSize: 37,
        textAlign: 'left',
        color: '#FFFFFF',
        marginBottom: '60%',
        marginTop: 8,
        fontFamily: "InrianSans",
    },

    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222',
        padding: 10,
        borderRadius: 20,
    },

    filterButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
    },

    filterButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

    filterText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 10,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },

    monthItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    monthText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    yearItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    
    yearText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },

})
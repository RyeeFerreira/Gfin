import { StyleSheet} from "react-native";



export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Garante que o conteúdo ocupe espaço para rolagem
  },

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
    marginTop: '10%',// rever aq
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

  form: {
    marginBottom: '2%',
  },

  radioButtonContainer: {
    marginBottom: '5%',
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B2A6A6',
    marginRight: 10,
  },

  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#005E72',
    borderWidth: 2,
    borderColor: '#FFF',
    marginRight: 10,
  },

  radioText: {
    fontSize: 16,
    fontWeight: 'light',
    fontFamily: "InrianSans",
    color: '#FFFFFF', 
  },
  
  label: {
    color: '#FFFFFF',
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1913',
    borderRadius: 8,
    marginBottom: '5%',
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

  botaoCadastrar: {
    margin: 'auto',
    backgroundColor: "#005E72",
    width: "70%",
    height: "23%",
    marginTop: "15%",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "InrianSans"
  },

  buttonDisabled: {
    backgroundColor: '#5A5A5A',
  },

  categoriaContainer: { 
    marginBottom: '5%',
  },  

  dropdown: {
    backgroundColor: "#1A1913",
    marginBottom: '5%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  
  lista:{
    backgroundColor: "#1A1913",
    marginTop: 0,
    width: 290 // estatico por enquanto
  },

  item: {
    margin: 0,
    width: '100%',
    backgroundColor: "#1A1913",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderBottomWidth: 5,
    borderBottomColor: "#14130D",
    borderRadius: 4,
  },

  selectedItem: {
    borderWidth: 2,
    borderColor: "14130D",
  },

  itemText: {
    fontSize: 15,
    color: "white",
  }
  });
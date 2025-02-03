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
  pickerContainer: {
    width: "90%",
    height: 50,
    backgroundColor: '#1A1913',
    borderRadius: 8, // Adicionando borderRadius
    overflow: 'hidden', // Necessário para aplicar o borderRadius ao Picker
    marginBottom: '5%',
},

picker: {
    width: "100%",
    height: "100%",
    color: '#D2D2D2',
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
  }
  });
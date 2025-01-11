import React, { useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
  } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import Logo from "../../assets/images/Gfin.png";
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

//#region NavegaçãoConfig
type RootStackParamList = {
    Login: undefined;
    Cadastrar: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastrar'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Cadastrar'>;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
};
//#endregion

export default function CriarConta({ navigation }: Props) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [repetirSenhaVisivel, setRepetirSenhaVisivel] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

    
 useEffect(() => {
   if (nome.trim() === '' || email.trim() === '' || senha.trim() === '' || repetirSenha.trim() === '') {
        setIsDisabled(true); 
    } else {
        setIsDisabled(false); 
    }
}, [nome, email, senha, repetirSenha]);

  const validarCampos = () => {
    if (!nome.trim()) {
      Alert.alert("Erro", "O campo Nome é obrigatório.");
      return false;
    }
    if (!email.trim()) {
      Alert.alert("Erro", "O campo E-mail é obrigatório.");
      return false;
    }
    if (!senha.trim()) {
      Alert.alert("Erro", "O campo Senha é obrigatório.");
      return false;
    }
    if (senha !== repetirSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return false;
    }
    return true;
  };

  const cadastrar = () => {
    if (validarCampos()) {
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Login");
    }
  };

    return ( 
    <LinearGradient 
    colors={['#14130D','#14130D', '#14130D','#2E2A2A']} 
    start={{x:0.00, y:0}}
    end={{x:1, y:1}}
    style={styles.linearGradient} >
      <View style={styles.container}>
        <View style={styles.header}>
            <View>
                {/* Botão Voltar */}
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.voltar}>
                    <Ionicons name="arrow-back" size={20} color="#005E72" />
                    <Text style={styles.voltarTexto}>VOLTAR</Text>
                </TouchableOpacity>
                
                {/* Titulo */}
                <Text style={styles.titulo}>Criar Conta</Text>
            </View>

            {/* Logo */}
            <View>
                <Image source={Logo} style={styles.logo} />
            </View>
        </View>
           
            

        {/* Formulário */}
        <View style={styles.form}>
          {/* Nome */}
          <Text style={styles.label}>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            style={[styles.input, !nome.trim() && styles.inputError]}
            placeholder="Digite seu nome"
            placeholderTextColor="#7B7B7B"
          />
  
          {/* E-mail */}
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#7B7B7B"
            keyboardType="email-address"
          />
  
          {/* Senha */}
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={senha}
              onChangeText={setSenha}
              style={styles.inputComIcone}
              placeholder="Digite uma senha"
              placeholderTextColor="#7B7B7B"
              secureTextEntry={!senhaVisivel}
            />
            <TouchableOpacity
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              style={styles.icon}>
              <Ionicons
                name={senhaVisivel ? 'eye' : 'eye-off'}
                size={20}
                color="#A6A6A6"
              />
            </TouchableOpacity>
          </View>
  
          {/* Repetir Senha */}
          <Text style={styles.label}>Repita a Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
            value={repetirSenha}
            onChangeText={setRepetirSenha}
              style={styles.inputComIcone}
              placeholder="Digite novamente uma senha"
              placeholderTextColor="#A6A6A6"
              secureTextEntry={!repetirSenhaVisivel}
            />
            <TouchableOpacity
              onPress={() => setRepetirSenhaVisivel(!repetirSenhaVisivel)}
              style={styles.icon}>
              <Ionicons
                name={repetirSenhaVisivel ? 'eye' : 'eye-off'}
                size={20}
                color="#A6A6A6"
              />
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Botão Cadastrar */}
        <View style={styles.btn}>
        <TouchableOpacity onPress={cadastrar} style={[styles.botaoCadastrar, isDisabled && styles.buttonDisabled]}>
          <Text style={styles.botaoTexto}>CADASTRAR</Text>
        </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
    );
}
  
  

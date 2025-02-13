import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { useUsuarioDatabase } from '../../database/useUsuarioDatabase';

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

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const usuarioDatabase = useUsuarioDatabase();

  async function create() {
    try {
      const respose = await usuarioDatabase.create({ name, email, senha })

      Alert.alert("Usuario cadastrado com o ID:" + respose.insertedRowId)
    } catch (error) {
      Alert.alert("Erro ao cadastrar")
      console.log(error)
    }
  }

  useEffect(() => {
    if (name.trim() === '' || email.trim() === '' || senha.trim() === '' || repetirSenha.trim() === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, email, senha, repetirSenha]);

  const validarCampos = () => {
    if (!name.trim()) {
      Alert.alert("Erro", "O campo name é obrigatório.");
      return false;
    }
    if (!email.trim()) {
      Alert.alert("Erro", "O campo E-mail é obrigatório.");
      return false;
    } else if (!email.includes("@") || !email.includes(".com")) {
      Alert.alert("Erro", "O campo E-mail é invalido.");
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
      create();
      navigation.navigate("Login");
    } else {
      Alert.alert("erro ao cadastrar1")
    }
  };


  return (
    <KeyboardAvoidingView style={styles.scrollContent}  behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <LinearGradient
        colors={['#14130D', '#14130D', '#14130D', '#2E2A2A']}
        start={{ x: 0.00, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient} >
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.voltar}>
                <Ionicons name="arrow-back" size={20} color="#005E72" />
                <Text style={styles.voltarTexto}>VOLTAR</Text>
              </TouchableOpacity>
              <Text style={styles.titulo}>Criar Conta</Text>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              value={name}
              onChangeText={setname}
              style={[styles.input, !name.trim() && styles.inputError]}
              placeholder="Digite seu nome"
              placeholderTextColor="#7B7B7B"
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#7B7B7B"
              keyboardType="email-address"
            />

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

          <View>
            <TouchableOpacity onPress={cadastrar} style={[styles.botaoCadastrar, isDisabled && styles.buttonDisabled]}>
              <Text style={styles.botaoTexto}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}



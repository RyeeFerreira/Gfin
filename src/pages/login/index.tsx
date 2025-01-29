import React, { useState, useEffect } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight, Alert, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import Logo from "../../assets/images/Gfin.png";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useUsuarioDatabase } from "../../database/useUsuarioDatabase";
import { LinearGradient } from 'expo-linear-gradient';

// Define os tipos das rotas
type RootStackParamList = {
    Login: undefined;
    Senha: undefined;
    Cadastrar: undefined;
    Inicio: undefined;
    Historico: undefined;
};

// Tipo para a propriedade de navegação
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// Tipo para a propriedade de rota (opcional)
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

// Props do componente
type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
};

export default function Login({ navigation }: Props) {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const usuarioDatabase = useUsuarioDatabase();

    async function logar() {
        try {
            if (!isDisabled) {
                const respose = await usuarioDatabase.consulta(email, senha)
                if (respose == true) {
                    return navigation.navigate('Inicio');
                } else {
                    return Alert.alert("Usuario não encontrado")
                }
            }

        } catch (error) {
            Alert.alert("Erro ao logar")
            console.log(error)
        }
    }

    useEffect(() => {
        if (email.trim() === '' || senha.trim() === '') {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [email, senha]);


    return (
        <KeyboardAvoidingView style={styles.scrollContent} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <LinearGradient
                    colors={['#14130D', '#14130D', '#14130D', '#2E2A2A']}
                    start={{ x: 0.00, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Image style={styles.logo} source={Logo} />

                        <View style={styles.form}>
                            <Text style={styles.label}>Email:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu email"
                                placeholderTextColor="#AEA8A8"
                                value={email}
                                onChangeText={setEmail}
                            />

                            <Text style={styles.label}>Senha:</Text>
                            <View  style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputComIcone}
                                    placeholder="Digite sua senha"
                                    placeholderTextColor="#AEA8A8"
                                    value={senha}
                                    onChangeText={setSenha}
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
                        </View>

                        <View style={styles.grupo3}>
                            <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
                                <Text style={styles.link}>Esqueceu sua senha?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
                                <Text style={styles.link}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableHighlight
                            style={[styles.button, isDisabled && styles.buttonDisabled]}
                            disabled={isDisabled}
                            onPress={logar}
                        >
                            <Text style={styles.buttonText}>ENTRAR</Text>
                        </TouchableHighlight>
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

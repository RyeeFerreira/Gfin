import React, { useState, useEffect } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import { styles } from './styles';
import Logo from "../../assets/images/Gfin.png";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define os tipos das rotas
type RootStackParamList = {
    Login: undefined;
    Senha: undefined;
    Cadastrar: undefined;
    Inicio: undefined;
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
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    
    useEffect(() => {
        if (email.trim() === '' || senha.trim() === '') {
            setIsDisabled(true); 
        } else {
            setIsDisabled(false); 
        }
    }, [email, senha]);

    const logar = () => {
        if (!isDisabled) {
            navigation.navigate('Inicio');
        } else {
            Alert.alert("Por favor, preencha os campos antes de continuar.");
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <View style={styles.grupo1}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="#AEA8A8"
                    value={email}
                    onChangeText={setEmail} // Atualiza o estado do email
                />
            </View>

            <View style={styles.grupo2}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#AEA8A8"
                    value={senha}
                    onChangeText={setSenha} // Atualiza o estado da senha
                    secureTextEntry // Oculta o texto para senhas
                />
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
                style={[styles.button, isDisabled && styles.buttonDisabled]} // Aplica estilo para desabilitado
                disabled={isDisabled}
                onPress={logar}
            >
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableHighlight>
        </View>
    );
}

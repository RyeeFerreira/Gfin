import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


//#region NavegaçãoConfig
type RootStackParamList = {
    Login: undefined;
    AdicionarItem: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AdicionarItem'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'AdicionarItem'>;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
};
//#endregion

export default function CriarConta({ navigation }: Props) {

    const [selectedValue, setSelectedValue] = useState("lazer");
    return (
        <KeyboardAvoidingView style={styles.scrollContent} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
                                <Text style={styles.titulo}>Adicionar Item</Text>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>Titulo</Text>
                            <TextInput
                                placeholder="Digite o titulo do item"
                                placeholderTextColor="#7B7B7B"
                            />
                            <Text style={styles.label}>Valor</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o valor do item"
                                placeholderTextColor="#7B7B7B"
                            />

                            <Text style={styles.label}>Categoria</Text>

                            <View style={styles.pickerContainer}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Lazer" value="lazer" />
                                    <Picker.Item label="Conta" value="conta" />
                                    <Picker.Item label="Comida" value="comida" />
                                    <Picker.Item label="Mercado" value="mercado" />
                                </Picker>
                            </View>


                            <Text style={styles.label}>Data</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputComIcone}
                                    placeholder="Digite a data do item"
                                    placeholderTextColor="#A6A6A6"
                                />
                            </View>
                            <Text style={styles.label}>Descrição</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputComIcone}
                                    placeholder="Digite a descrição do item"
                                    placeholderTextColor="#A6A6A6"
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Adicionar mensalmente ao seu histórico?</Text>

                            </View>

                        </View>

                        <View>

                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}



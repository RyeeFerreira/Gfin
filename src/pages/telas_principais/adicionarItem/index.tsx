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
    Inicio: undefined;
    AdicionarItem: undefined;
};

type AdicionarItemNavigation = StackNavigationProp<RootStackParamList, 'AdicionarItem'>;
type AdicionarItemRoute = RouteProp<RootStackParamList, 'AdicionarItem'>;

type Props = {
    navigation: AdicionarItemNavigation;
    route: AdicionarItemRoute;
};
//#endregion

export default function adicionarItem({ navigation }: Props) {

    const [titulo, setTitulo] = useState("");
    const [tipo_de_saldo, setTipo_de_saldo] = useState(false);
    const [valor, setValor] = useState("");
    const [categoria, setcategoria] = useState("lazer");
    const [data, setData] = useState(new Date());
    const [descricao, setDescricao] = useState("");
    const [repeticao, setRepeticao] = useState(false);
    const [data_repeticao, setData_repeticao] = useState(new Date());

   

    useEffect(() => {
        Alert.alert(`${data}`);
    }, [data]);

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
                                <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.voltar}>
                                    <Ionicons name="arrow-back" size={20} color="#005E72" />
                                    <Text style={styles.voltarTexto}>VOLTAR</Text>
                                </TouchableOpacity>
                                <Text style={styles.titulo}>Adicionar Item</Text>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>Titulo</Text>
                            <TextInput
                                value={titulo}
                                onChangeText={setTitulo}
                                placeholder="Digite o titulo do item"
                                placeholderTextColor="#7B7B7B"
                            />
                            <Text style={styles.label}>Valor</Text>
                            <TextInput
                                value={valor}
                                onChangeText={setValor}
                                style={styles.input}
                                placeholder="Digite o valor do item"
                                placeholderTextColor="#7B7B7B"
                            />

                            <Text style={styles.label}>Categoria</Text>

                            <View style={styles.pickerContainer}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={categoria}
                                    onValueChange={(itemValue, itemIndex) => setcategoria(itemValue)}
                                >
                                    <Picker.Item label="Lazer" value="lazer" />
                                    <Picker.Item label="Conta" value="conta" />
                                    <Picker.Item label="Comida" value="comida" />
                                    <Picker.Item label="Mercado" value="mercado" />
                                </Picker>
                            </View>

                            <Text style={styles.label}>Data</Text>
                            <View style={styles.inputContainer}>
                                <TextInput> aaaa</TextInput>
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



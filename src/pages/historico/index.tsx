import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert, ScrollView, Platform, KeyboardAvoidingView,Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

type RootStackParamList = {
    Login: undefined;
    Senha: undefined;
    Cadastrar: undefined;
    Inicio : undefined;
    Historico: undefined;   
};

type HistoricoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Historico'>;
type HistoricoScreenRouteProp = RouteProp<RootStackParamList, 'Historico'>;

type Props = {
    navigation: HistoricoScreenNavigationProp;
    route: HistoricoScreenRouteProp;
};

export default function Historico({ navigation }: Props) {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [monthModalVisible, setMonthModalVisible] = useState(false);
    const [yearModalVisible, setYearModalVisible] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        setMonth(months[currentDate.getMonth()]); // Obtém o mês atual
        setYear(currentDate.getFullYear().toString()); // Obtém o ano atual
    }, []);

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
                                <Text style={styles.titulo}>Histórico</Text>
                            </View>
                        </View>
                         <View style={styles.filterContainer}>
                            <TouchableOpacity style={styles.filterButton} onPress={() => setMonthModalVisible(true)}>
                                <Text style={styles.filterButtonText}>Mês</Text>
                            </TouchableOpacity>

                            <Text style={styles.filterText}>{month} - {year}</Text>

                            <TouchableOpacity style={styles.filterButton} onPress={() => setYearModalVisible(true)}>
                                <Text style={styles.filterButtonText}>Ano</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.header}>
                            {/* Modal para selecionar Mês */}
                            <Modal visible={monthModalVisible} transparent={true} animationType="slide">
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <FlatList
                                            data={months}
                                            keyExtractor={(item) => item}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity 
                                                    style={styles.monthItem} 
                                                    onPress={() => {
                                                        setMonth(item);
                                                        setMonthModalVisible(false);
                                                    }}
                                                >
                                                    <Text style={styles.monthText}>{item}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />
                                    </View>
                                </View>
                            </Modal>

                            {/* Modal para selecionar Ano */}
                            <Modal visible={yearModalVisible} transparent={true} animationType="slide">
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <FlatList
                                            data={Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString())}
                                            keyExtractor={(item) => item}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity 
                                                    style={styles.yearItem} 
                                                    onPress={() => {
                                                        setYear(item);
                                                        setYearModalVisible(false);
                                                    }}
                                                >
                                                    <Text style={styles.yearText}>{item}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView >
    );

}
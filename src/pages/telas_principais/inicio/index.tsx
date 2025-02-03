import React from "react";

import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import Logo from "../../../assets/images/Gfin.png";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from "react-native-chart-kit";



type RootStackParamList = {
    Inicio: undefined;
    Historico: undefined;
    AdicionarItem: undefined;
};

type InicioScreenNavigation = StackNavigationProp<RootStackParamList, 'Inicio'>;
type InicioScreenRoute = RouteProp<RootStackParamList, 'Inicio'>;

type Props = {
    navigation: InicioScreenNavigation;
    route: InicioScreenRoute;
};

export default function inicio({ navigation }: Props) {
    const data = [20, 45, 28, 80, 99, 43, 50];

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
                            <Image style={styles.logo} source={Logo} />
                        </View>
                        <View style={styles.body}>
                            <View style={styles.saldo}>
                                <Text>20000</Text>
                            </View>
                            <View style={styles.grafico}>
                                <LineChart
                                    data={{
                                        labels: data.map((_, index) => index.toString()),
                                        datasets: [
                                            {
                                                data: data
                                            }
                                        ]
                                    }}
                                    width={350}
                                    height={220}
                                    chartConfig={{
                                        backgroundGradientFrom: "#14130D",
                                        backgroundGradientTo: "#1B1818",
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(0, 94, 114, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        propsForDots: {
                                            r: "3",
                                            strokeWidth: "2",
                                            stroke: "#005E72"
                                        }
                                    }}
                                    bezier
                                    style={{
                                        width: "100%",
                                        height: 220,
                                        marginVertical: 8,
                                        borderRadius: 16
                                    }}
                                />
                                <View>
                                </View>
                            </View>
                            <View style={styles.historico}>
                                <View style={styles.headerHistorico}>
                                    <Text style={styles.titulo}>Histórico Mensal</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Historico')}>
                                        <Text style={styles.link}>ver mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Historico')} style={styles.itensHistorico}>
                                <Ionicons name="storefront-outline" size={20} color="#FFFFFF" />
                                <Text style={styles.nomeCategoria}>Mercado</Text>
                                <Text style={styles.valor}>R$800,00</Text>
                                <Ionicons name="ellipsis-horizontal-outline" size={15} color="#FFFFFF" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Historico')} style={styles.itensHistorico}>
                                <Ionicons name="fitness-outline" size={20} color="#FFFFFF" />
                                <Text style={styles.nomeCategoria}>Saúde</Text>
                                <Text style={styles.valor}>R$300,00</Text>
                                <Ionicons name="ellipsis-horizontal-outline" size={15} color="#FFFFFF" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Historico')} style={styles.itensHistorico}>
                                <Ionicons name="school-outline" size={20} color="#FFFFFF" />
                                <Text style={styles.nomeCategoria}>Educação</Text>
                                <Text style={styles.valor}>R$230,00</Text>
                                <Ionicons name="ellipsis-horizontal-outline" size={15} color="#FFFFFF" />
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('AdicionarItem')} style={styles.botaoCadastrar} >
                                    <Text style={styles.botaoTexto}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </LinearGradient>
        </ScrollView>
        </KeyboardAvoidingView >
    );
}



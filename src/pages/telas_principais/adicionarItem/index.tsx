import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Platform, KeyboardAvoidingView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Checkbox, Menu, Button } from "react-native-paper";
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

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


    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<{ label: string; icon: string } | null>(null);
    const [visible, setVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Opções do Dropdown
    const categories = [
        { id: "1", label: "Mercado", icon: "shopping-cart" },
        { id: "2", label: "Lazer", icon: "gamepad" },
        { id: "3", label: "Educação", icon: "book" },
        { id: "4", label: "Outro", icon: "dots-three-horizontal" },
    ];

    // Função para alternar seleção
    const toggleSelection = (id: string) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
        const selected = categories.find((item) => item.id === id);
        if (selected) {
            setSelectedCategory(selected);
        }
    };

    return (
        <PaperProvider>
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
                            <View style={styles.radioButtonContainer}>
                                <Text style={styles.label}>Selecione uma opção:</Text>
                                <TouchableOpacity
                                    style={styles.radioButton}
                                    onPress={() => setSelectedOption('opcao1')}
                                >
                                    <View style={selectedOption === 'opcao1' ? styles.radioSelected : styles.radioUnselected} />
                                    <Text style={styles.radioText}>Ganho</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.radioButton}
                                    onPress={() => setSelectedOption('opcao2')}
                                >
                                    <View style={selectedOption === 'opcao2' ? styles.radioSelected : styles.radioUnselected} />
                                    <Text style={styles.radioText}>Gasto</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.categoriaContainer}>
                                <Text style={styles.label}>Categoria</Text>
                                <Menu
                                    visible={visible}
                                    onDismiss={() => setVisible(false)}
                                    anchor={
                                        <Button
                                            onPress={() => setVisible(true)}
                                            style={styles.dropdown}
                                            
                                        >
                                            <Text style={styles.input}>Escolha uma categoria</Text>
                                            <MaterialIcons name="arrow-drop-down" size={24} color="white" />
                                        </Button>
                                    }
                                >
                                    <FlatList
                                        data={categories}
                                        style={styles.lista}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={[
                                                    styles.item,
                                                    selectedOptions.includes(item.id) && styles.selectedItem,
                                                ]}
                                                onPress={() => toggleSelection(item.id)}
                                            >
                                                <FontAwesome name={item.icon as any} size={20} color="white" style={styles.icon} />
                                                <Text style={styles.itemText}>{item.label}</Text>
                                                <Checkbox
                                                    status={selectedOptions.includes(item.id) ? "checked" : "unchecked"}
                                                    onPress={() => toggleSelection(item.id)}
                                                    color="white"
                                                />
                                            </TouchableOpacity>
                                        )}
                                    />
                                </Menu>
                            </View>

                            <Text style={styles.label}>Título</Text>
                            <TextInput
                                value={titulo}
                                onChangeText={setTitulo}
                                style={styles.input}
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

                            <Text style={styles.label}>Data</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Digite a data"
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
        </PaperProvider>
    )
}



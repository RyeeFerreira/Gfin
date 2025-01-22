import React from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './style';
import { useFonts } from 'expo-font';
import Logo from "../../assets/images/Gfin.png";






export default function inicio() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={Logo} />
            </View>
            <View style={styles.body}>
                <View style={styles.saldo}>
                    <Text>20000</Text>
                </View>
                <View style={styles.grafico}>
                    <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                </View>
                <View style={styles.historico}>
                </View>

            </View>
        </View>
    )
}



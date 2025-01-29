import React from "react";

import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';
import Logo from "../../assets/images/Gfin.png";
import { LineChart } from "react-native-chart-kit";




export default function inicio() {
    const data = [20, 45, 28, 80, 99, 43, 50];

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
                <LineChart 
                        data={{
                            labels: data.map((_, index) => index.toString()),
                            datasets: [
                                {
                                    data: data
                                }
                            ]
                        }}
                        width= {350}
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
                </View>

            </View>
        </View>
    )
}



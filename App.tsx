import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';


import Login from './src/pages/login';
import Senha from './src/pages/esqueceuSenha';
import Cadastrar from './src/pages/cadastrar';
import inicio from './src/pages/inicio';
import Historico from './src/pages/historico';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from './src/database/initializeDatabase';



// Defina os tipos das rotas
type RootStackParamList = {
  Login: undefined;
  Senha: undefined;
  Cadastrar: undefined;
  Inicio: undefined;
  Historico: undefined;  
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'InrianSans': require('./src/assets/fonts/InriaSans-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SQLiteProvider databaseName='database' onInit={initializeDatabase}>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Senha" component={Senha} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Inicio" component={inicio} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
    </SQLiteProvider>
  );
}

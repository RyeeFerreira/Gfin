import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';


import Login from './src/pages/login';
import Senha from './src/pages/esqueceuSenha';
import Cadastrar from './src/pages/cadastrar';
import Inicio from './src/pages/telas_principais/inicio';
import AdicionarItem from './src/pages/telas_principais/criar_item';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from './src/database/initializeDatabase';



// Defina os tipos das rotas
type RootStackParamList = {
  Login: undefined;
  Senha: undefined;
  Cadastrar: undefined;
  Inicio: undefined;
  AdicionarItem: undefined;
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
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="AdicionarItem" component={AdicionarItem} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </SQLiteProvider>
  );
}

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';


import Login from './src/pages/login';
import Senha from './src/pages/esqueceuSenha';
import Cadastrar from './src/pages/cadastrar';
import inicio from './src/pages/inicio';

const firebaseConfig = {
  apiKey: "AIzaSyAHbzTZHudGrSIznuX3_7gHDZ83CnXt98E",
  authDomain: "bdgf-dd7b4.firebaseapp.com",
  projectId: "bdgf-dd7b4",
  storageBucket: "bdgf-dd7b4.firebasestorage.app",
  messagingSenderId: "103024531131",
  appId: "1:103024531131:web:26579b5fec24c3deaa3b9e",
  measurementId: "G-P533GDX2TM"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Defina os tipos das rotas
type RootStackParamList = {
  Login: undefined;
  Senha: undefined;
  Cadastrar: undefined;
  Inicio: undefined;
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
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Senha" component={Senha} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Inicio" component={inicio} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

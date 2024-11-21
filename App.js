import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/CadastroScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/Events';
import EventDetailScreen from './screens/EventDetailScreen'; 
import ContactUsScreen from './screens/ContactUsScreen';
import HorasScreen from './screens/HorasScreen'; // Import da tela HorasScreen
import CertificadosScreen from './screens/CertificadosScreen'; // Import da tela CertificadosScreen
import CertificadoDetailScreen from './screens/CertificadoDetailScreen'; // Import da tela CertificadoDetailsScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'Cadastro', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }} 
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{ headerShown: false, title: 'Eventos' }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen} 
          options={{ title: 'Detalhes do Evento' }}
        />
        <Stack.Screen
          name="ContactUsScreen"
          component={ContactUsScreen} // Tela de contato
          options={{ title: 'Contato', headerShown: false }} 
        />
        <Stack.Screen
          name="Horas" // Adiciona a tela HorasScreen
          component={HorasScreen}
          options={{ headerShown: false, title: 'Horas Complementares' }}
        />
        <Stack.Screen
          name="Certificados" 
          component={CertificadosScreen}
          options={{ headerShown: false, title: 'Certificados' }}
        />
        <Stack.Screen
          name="Certificado" 
          component={CertificadoDetailScreen}
          options={{ headerShown: false, title: 'Certificado' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

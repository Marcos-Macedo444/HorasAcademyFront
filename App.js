import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/CadastroScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/Events';
import EventDetailScreen from './screens/EventDetailScreen'; // Adicione esta linha

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
          // options={{ title: 'Eventos' }}
          options={{ headerShown: false, title: 'Eventos' }} // Adicione esta linha
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen} // Adicionando a tela de detalhes do evento
          options={{ title: 'Detalhes do Evento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

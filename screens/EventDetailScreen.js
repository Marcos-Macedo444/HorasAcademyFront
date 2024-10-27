import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// Componente EventDetailScreen
export default function EventDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params; // Recebendo os dados do evento da navegação

  // Função para lidar com a inscrição
  const handleRegister = () => {
    Alert.alert(
      "Inscrição concluída.", 
      "Fique atento na data e horário do evento!!" // Mensagem em duas linhas
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem da logo no topo */}
      <Image source={require('../assets/logopretacomborda.jpg')} style={styles.logo} />

      {/* Detalhes do evento */}
      <View style={styles.detailsContainer}>
        <Image source={event.image} style={styles.image} />
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.details}>Local: {event.local}</Text>
        <Text style={styles.details}>Data: {event.date}</Text>
        <Text style={styles.details}>Horário: {event.time}</Text>

        {/* Botão de Inscrever-se */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Inscrever-se</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86aaf0',
    padding: 16,
  },
  logo: {
    width: '55%', // Aumentando a largura da logo
    height: 203,  // Aumentando a altura da logo
    marginBottom: 16,
    borderRadius: 10,
    alignSelf: 'center', // Centraliza a logo
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fundo branco com mais transparência
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  image: {
    width: 350, // Diminuindo a largura da imagem
    height: 400,  // Aumentando a altura da imagem
    borderRadius: 10,
    marginBottom: 16,
    alignSelf: 'center', // Centraliza a imagem
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  registerButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#86aaf0', // Cor do botão de Inscrever-se (azul)
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center', // Centraliza o botão na tela
  },
  registerButtonText: {
    fontSize: 16,
    color: 'white', // Cor do texto do botão
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center', // Centraliza o botão na tela
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

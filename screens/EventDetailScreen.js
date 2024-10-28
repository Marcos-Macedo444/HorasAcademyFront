import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuHamburger from '../src/components/MenuHamburger'; // Importando o componente de menu

export default function EventDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params; // Obtendo os dados do evento da navegação
  const [menuVisible, setMenuVisible] = useState(false);

  // Desativando o cabeçalho na navegação
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Certifique-se de que `event` está definido
  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Evento não encontrado.</Text>
      </View>
    );
  }

  // Função para lidar com a inscrição
  const handleRegister = () => {
    Alert.alert("Inscrição concluída.", "Fique atento na data e horário do evento!");
  };

  return (
    <View style={styles.container}>
      {menuVisible && (
        <MenuHamburger navigation={navigation} isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
      )}

      {!menuVisible && (
        <TouchableOpacity style={styles.hamburgerButton} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.hamburgerText}>≡</Text>
        </TouchableOpacity>
      )}

      <ScrollView style={styles.contentContainer}>
        <Image source={require('../assets/logopretacomborda.jpg')} style={styles.logo} />

        <View style={styles.detailsContainer}>
          <Image source={event.image} style={styles.image} />
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>{event.description}</Text>
          <Text style={styles.details}>Local: {event.local}</Text>
          <Text style={styles.details}>Data: {event.date}</Text>
          <Text style={styles.details}>Horário: {event.time}</Text>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Inscrever-se</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86aaf0',
    padding: 16,
  },
  contentContainer: {
    flex: 1,
  },
  logo: {
    width: '58%',
    height: 203,
    marginBottom: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    top: -10,
  },
  image: {
    width: 350,
    height: 400,
    borderRadius: 10,
    marginBottom: 16,
    alignSelf: 'center',
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
    backgroundColor: '#86aaf0',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  registerButtonText: {
    fontSize: 16,
    color: 'white',
  },
  backButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 1000,
    paddingLeft: -5,
    borderRadius: 8,
  },
  hamburgerText: {
    fontSize: 50,
    color: '#000',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
  },
});

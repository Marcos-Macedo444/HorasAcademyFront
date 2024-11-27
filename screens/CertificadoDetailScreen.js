import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuHamburger from '../src/components/MenuHamburger'; // Importando o componente de menu
import certificado from '../assets/certificado.jpg';
import * as FileSystem from 'expo-file-system';
import { Linking } from 'react-native';

// URL da imagem na web
const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1q7ccQtCqcNacrmsR2ZRqDeMLe70Ew3xiXg&s';

export default function CertificadoDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params; // Obtendo os dados do evento da navegaçãoa
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

  // Função para acessar a imagem na web
  const handleAccessWeb = async () => {
    const supported = await Linking.canOpenURL(imageUrl);
    if (supported) {
      Linking.openURL(imageUrl);
    } else {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  };

  const handleDownload = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'certificado.jpg';
      const downloadResult = await FileSystem.downloadAsync(imageUrl, fileUri);
      Alert.alert('Download Concluído', `Imagem salva em: ${downloadResult.uri}`);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível baixar a imagem.");
    }
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
          <Image source={certificado} style={styles.image} />
        </View>

        <TouchableOpacity style={styles.backButton} onPress={handleDownload}>
          <Text style={styles.backButtonText}>Baixar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleAccessWeb}>
          <Text style={styles.backButtonText}>Acessar na web</Text>
        </TouchableOpacity>
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
    height: 215,
    marginBottom: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  detailsContainer: {
    flexDirection: 'column',  // Mantém os elementos em uma coluna (padrão)
    alignItems: 'center',     // Alinha horizontalmente no centro
    justifyContent: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    top: -10,
  },
  image: {
    width: 350,
    height: 250,
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
    width:70,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
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

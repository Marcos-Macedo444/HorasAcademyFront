import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MenuHamburger from '../src/components/MenuHamburger'; // Ajuste o caminho se necessário

const logo = require('../assets/logopretacomborda.jpg'); // Altere o caminho se necessário

export default function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false); // Para controlar a visibilidade do menu

  return (
    <View style={styles.container}>
      {/* Exibe o menu caso esteja visível */}
      {menuVisible && (
        <MenuHamburger 
          navigation={navigation} 
          isVisible={menuVisible} 
          onClose={() => setMenuVisible(false)} 
        />
      )}

      {/* Botão do menu hamburger, escondido quando o menu está visível */}
      {!menuVisible && (
        <TouchableOpacity style={styles.hamburgerButton} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.hamburgerText}>≡</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.pageTitle}>Olá, Fulano</Text>
      <Image source={logo} style={styles.logo} />

      {/* Card estilizado com os botões dentro */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Events')}>
          <Text style={styles.buttonText}>Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Certificados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Horas</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86aaf0', // Fundo azul
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-end', // Alinha o texto à direita
    marginTop: -20, // Aumenta a distância do título para o topo da tela
  },
  logo: {
    width: 240, // Dobra a largura da imagem
    height: 240, // Dobra a altura da imagem
    marginBottom: 50, // Aumenta a distância da logo para o conteúdo
    resizeMode: 'contain',
  },
  card: {
    width: '100%', // Aumenta a largura do card
    height: '28%',
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)', // Fundo branco transparente
    elevation: 5,
    alignItems: 'center',
    marginTop: 10, // Adiciona espaço embaixo da logo
    borderWidth: 2,
    borderColor: '#86aaf0', // Cor da borda do card
  },
  button: {
    backgroundColor: '#86aaf0', // Fundo azul
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%', // Aumenta a largura do botão
    borderWidth: 1,
    borderColor: 'white', // Borda branca
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  backButton: {
    backgroundColor: '#fff', // Fundo branco
    paddingVertical: 15,
    paddingHorizontal: 60, // Aumenta a largura do botão "Voltar"
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 50, // Ajusta a distância do botão "Voltar" para os outros elementos
  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 1000, // Garante que o botão esteja acima de outros elementos
    paddingLeft: -5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  hamburgerText: {
    fontSize: 50,
    color: '#000',
  },
});

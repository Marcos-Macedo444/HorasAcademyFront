import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MenuHamburger from '../src/components/MenuHamburger'; // Verifique se o caminho está correto

const logo = require('../assets/logopretacomborda.jpg'); // Ajuste o caminho da logo se necessário

export default function HorasScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false); // Controle do menu

  const totalHoras = 310; // Total de horas necessárias
  const horasConcluidas = 82; // Horas já concluídas
  const progresso = horasConcluidas / totalHoras; // Progresso em percentual

  return (
    <View style={styles.container}>
      {/* Menu Hamburger */}
      {menuVisible && (
        <MenuHamburger
          navigation={navigation}
          isVisible={menuVisible}
          onClose={() => setMenuVisible(false)}
        />
      )}

      {/* Botão do menu */}
      {!menuVisible && (
        <TouchableOpacity
          style={styles.hamburgerButton}
          onPress={() => setMenuVisible(!menuVisible)}
        >
          <Text style={styles.hamburgerText}>≡</Text>
        </TouchableOpacity>
      )}

      <Image source={logo} style={styles.logo} />

      <View style={styles.card}>
        <Text style={styles.title}>Horas Complementares:</Text>
        <Text style={styles.completedText}>
          {horasConcluidas} Horas concluídas!!
        </Text>

        {/* Barra de progresso */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${progresso * 100}%` }]} />
        </View>

        <Text style={styles.remainingText}>
          Faltam {totalHoras - horasConcluidas} horas!
        </Text>

        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>Verificar certificados</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86aaf0',
    alignItems: 'center',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1000,
  },
  hamburgerText: {
    fontSize: 40,
    color: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '85%',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#86aaf0',
    marginTop: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  completedText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  remainingText: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  progressBarContainer: {
    width: '100%',
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 5.5,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#000', // Preto igual ao exemplo
  },
  verifyButton: {
    backgroundColor: '#86aaf0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  verifyButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  backButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 50,
  },
  backButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

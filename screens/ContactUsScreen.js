import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Alert, Image, ScrollView } from 'react-native';
import MenuHamburger from '../src/components/MenuHamburger'; // Importando o componente de menu
import { useNavigation } from '@react-navigation/native';

export default function ContactUsScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  // Função para lidar com o envio da mensagem
  const handleEnviarMensagem = () => {
    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !telefone || !mensagem) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    
    Alert.alert("Mensagem enviada!!", "Iremos retornar o mais rápido possível");
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  // Desativando o cabeçalho na navegação
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#86aaf0" />

      {menuVisible && (
        <MenuHamburger navigation={navigation} isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
      )}

      {!menuVisible && (
        <TouchableOpacity style={styles.hamburgerButton} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.hamburgerText}>≡</Text>
        </TouchableOpacity>
      )}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../assets/logopretacomborda.jpg')} // Ajuste o caminho conforme necessário
          style={styles.logo}
        />

        <View style={styles.card}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo..."
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="numeric" // Permite apenas números
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={telefone}
            onChangeText={text => setTelefone(text.replace(/[^0-9]/g, ''))} // Remove caracteres não numéricos
            maxLength={15} // Limita a quantidade de números
          />

          <Text style={styles.label}>Mensagem:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Conte-nos, o que houve?"
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={4}
          />

          {/* Botões de Voltar e Enviar dentro do card */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendButton} onPress={handleEnviarMensagem}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#86aaf0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 60,
  },
  logo: {
    width: '58%',
    height: 211,
    marginBottom: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  card: {
    width: '90%', // Aumenta a largura do card
    padding: 25,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    elevation: 5,
    alignItems: 'center',
    marginTop: 20, // Adiciona espaço embaixo do card
  },
  label: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    opacity: 0.9,
  },
  textArea: {
    height: 100,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    opacity: 0.9,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ajusta a largura dos botões
    marginTop: 20, // Adiciona espaço acima dos botões
  },
  backButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginRight: 5,
  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
  },
  sendButton: {
    flex: 1,
    backgroundColor: '#80A3FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 5,
  },
  sendButtonText: {
    fontSize: 18,
    color: 'white',
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
});

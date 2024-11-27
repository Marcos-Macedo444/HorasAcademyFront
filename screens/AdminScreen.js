import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTheme } from 'react-native-paper';

export default function AdminScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [workload, setWorkload] = useState('')
  const [matricula, setMatricula] = useState('')

  const handleImageSelect = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleCadastro = async () => {
       try {
        const currentDate = new Date()
        const palestra = { title, description, location, date, time };
        const cargaHoraria = {title, description, currentDate,matricula, workload}
        await AsyncStorage.setItem('palestra', JSON.stringify(palestra));
        await AsyncStorage.setItem('certificado', JSON.stringify(cargaHoraria))
        alert('Palestra cadastrada com sucesso!');
        navigation.navigate('Login');
      } catch (error) {
        console.error('Erro ao salvar Palestra:', error);
        alert('Erro ao cadastrar Palestra. Tente novamente.');
      }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#86aaf0" />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logobranca.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Titulo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Titulo"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Local:</Text>
        <TextInput
          style={styles.input}
          placeholder="Local"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AA"
          secureTextEntry
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Horarário:</Text>
        <TextInput
          style={styles.input}
          placeholder="HH/MM"
          value={time}
          onChangeText={setTime}
        />

        <Text style={styles.label}>Carga Horária:</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          value={workload}
          onChangeText={setWorkload}
        />

        <Text style={styles.label}>Matrícula Aluno:</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={matricula}
          onChangeText={setMatricula}
        />

        <Text style={styles.label}>Imagem:</Text>
        <TouchableOpacity style={styles.imageButton} onPress={handleImageSelect}>
          <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
        </TouchableOpacity>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}

        <TouchableOpacity style={styles.registerButton} onPress={handleCadastro}>
          <Text style={styles.registerButtonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#86aaf0',
  },
  logoContainer: {
    marginBottom: 0, 
    alignItems: 'center',
  },
  logo: {
    width: 120,  
    height: 120,
    resizeMode: 'contain', 
  },
  card: {
    width: '75%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    elevation: 5,
    alignItems: 'center',
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
  },
  suggestionItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  suggestionText: {
    fontSize: 16,
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#80A3FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
  },
});

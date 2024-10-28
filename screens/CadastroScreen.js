// import React, { useState } from 'react';
// import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function CadastroScreen({ navigation }) {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [confirmarSenha, setConfirmarSenha] = useState('');
//   const [curso, setCurso] = useState('');
//   const [matricula, setMatricula] = useState('');
//   const [cursosFiltrados, setCursosFiltrados] = useState([]);
//   const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

//   const cursosDisponiveis = [
//     "Engenharia de Software",
//     "Ciência da Computação",
//     "Sistemas de Informação",
//     "Engenharia Elétrica",
//     "Engenharia Mecânica",
//     "Medicina",
//     "Direito",
//     "Administração",
//     "Psicologia",
//     "Arquitetura e Urbanismo",
//     "Enfermagem",
//     "Farmácia",
//     "Biomedicina",
//     "Educação Física",
//     "Matemática",
//     "Física",
//     "Química",
//   ];

//   const handleCadastro = async () => {
//     if (senha === confirmarSenha) {
//       try {
//         const usuario = { nome, email, senha, curso, matricula };
//         await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
//         alert('Usuário cadastrado com sucesso!');
//         navigation.navigate('Login'); // Redireciona para a tela de login após o cadastro
//       } catch (error) {
//         console.error('Erro ao salvar usuário:', error);
//         alert('Erro ao cadastrar usuário. Tente novamente.');
//       }
//     } else {
//       alert('As senhas não correspondem!');
//     }
//   };

//   const handleCursoChange = (text) => {
//     setCurso(text);
//     if (text.length > 0) {
//       const filtrados = cursosDisponiveis.filter((curso) =>
//         curso.toLowerCase().includes(text.toLowerCase())
//       );
//       setCursosFiltrados(filtrados);
//       setMostrarSugestoes(true);
//     } else {
//       setMostrarSugestoes(false);
//     }
//   };

//   const handleCursoSelect = (cursoSelecionado) => {
//     setCurso(cursoSelecionado);
//     setMostrarSugestoes(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image 
//           source={require('../assets/logobranca.png')}
//           style={styles.logo}
//         />
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.label}>Nome:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Nome completo"
//           value={nome}
//           onChangeText={setNome}
//         />

//         <Text style={styles.label}>Email:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <Text style={styles.label}>Senha:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Senha"
//           secureTextEntry
//           value={senha}
//           onChangeText={setSenha}
//         />

//         <Text style={styles.label}>Confirma senha:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirme sua senha"
//           secureTextEntry
//           value={confirmarSenha}
//           onChangeText={setConfirmarSenha}
//         />

//         {/* Campo de Curso com Autocomplete */}
//         <Text style={styles.label}>Curso:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Digite seu curso"
//           value={curso}
//           onChangeText={handleCursoChange}
//         />
//         {mostrarSugestoes && (
//           <FlatList
//             data={cursosFiltrados}
//             keyExtractor={(item) => item}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.suggestionItem}
//                 onPress={() => handleCursoSelect(item)}
//               >
//                 <Text style={styles.suggestionText}>{item}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         )}

//         {/* Campo de Matrícula */}
//         <Text style={styles.label}>Matrícula:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Número de matrícula"
//           keyboardType="numeric"
//           value={matricula}
//           onChangeText={setMatricula}
//         />

//         <TouchableOpacity style={styles.registerButton} onPress={handleCadastro}>
//           <Text style={styles.registerButtonText}>CADASTRAR</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity 
//         style={styles.backButton} 
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backButtonText}>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#86aaf0',
//   },
//   logoContainer: {
//     marginBottom: 30, 
//     alignItems: 'center',
//   },
//   logo: {
//     width: 120,  
//     height: 120,
//     resizeMode: 'contain', 
//   },
//   card: {
//     width: '75%',
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.75)',
//     elevation: 5,
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 15,
//     alignSelf: 'flex-start',
//     marginTop: 10,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'black',
//     borderWidth: 2,
//     borderRadius: 13,
//     paddingHorizontal: 10,
//     marginTop: 5,
//     marginBottom: 10,
//     backgroundColor: 'white',
//   },
//   suggestionItem: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   suggestionText: {
//     fontSize: 16,
//   },
//   registerButton: {
//     marginTop: 20,
//     backgroundColor: '#80A3FF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   registerButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   backButton: {
//     marginTop: 20,
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backButtonText: {
//     fontSize: 18,
//     color: 'black',
//   },
// });

import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [curso, setCurso] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cursosFiltrados, setCursosFiltrados] = useState([]);
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

  const cursosDisponiveis = [
    "Engenharia de Software",
    "Ciência da Computação",
    "Sistemas de Informação",
    "Engenharia Elétrica",
    "Engenharia Mecânica",
    "Medicina",
    "Direito",
    "Administração",
    "Psicologia",
    "Arquitetura e Urbanismo",
    "Enfermagem",
    "Farmácia",
    "Biomedicina",
    "Educação Física",
    "Matemática",
    "Física",
    "Química",
  ];

  const handleCadastro = async () => {
    if (senha === confirmarSenha) {
      try {
        const usuario = { nome, email, senha, curso, matricula };
        await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Usuário cadastrado com sucesso!');
        navigation.navigate('Login');
      } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        alert('Erro ao cadastrar usuário. Tente novamente.');
      }
    } else {
      alert('As senhas não correspondem!');
    }
  };

  const handleCursoChange = (text) => {
    setCurso(text);
    if (text.length > 0) {
      const filtrados = cursosDisponiveis.filter((curso) =>
        curso.toLowerCase().includes(text.toLowerCase())
      );
      setCursosFiltrados(filtrados);
      setMostrarSugestoes(true);
    } else {
      setMostrarSugestoes(false);
    }
  };

  const handleCursoSelect = (cursoSelecionado) => {
    setCurso(cursoSelecionado);
    setMostrarSugestoes(false);
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
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Confirma senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <Text style={styles.label}>Curso:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu curso"
          value={curso}
          onChangeText={handleCursoChange}
        />
        {mostrarSugestoes && (
          <FlatList
            data={cursosFiltrados}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleCursoSelect(item)}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        <Text style={styles.label}>Matrícula:</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de matrícula"
          keyboardType="numeric"
          value={matricula}
          onChangeText={setMatricula}
        />

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

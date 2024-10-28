
// Menu estilo combinado no protótipo


// MenuHamburger.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const MenuHamburger = ({ navigation, isVisible, onClose }) => {
//   return (
//     <View style={[styles.container, { display: isVisible ? 'flex' : 'none' }]}>
//       <TouchableOpacity style={styles.button} onPress={() => { onClose(); navigation.navigate('Home'); }}>
//         <Text style={styles.buttonText}>Início</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => { onClose(); navigation.navigate('Events'); }}>
//         <Text style={styles.buttonText}>Agenda</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => { onClose(); alert('Ajuda'); }}>
//         <Text style={styles.buttonText}>Ajuda</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => { onClose(); navigation.navigate('Login'); }}>
//         <Text style={styles.buttonText}>Sair</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 120, // Aumentando a distância do topo
//     left: 60, // Alinhado à esquerda
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 10,
//     elevation: 5, // Sombra
//     width: 200,
//     zIndex: 999, // Garante que o menu esteja acima de outros elementos
//   },
//   button: {
//     backgroundColor: '#86aaf0',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default MenuHamburger;



//Menu estilo Mercado Livre


import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MenuHamburger = ({ navigation, isVisible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-200)).current; // Valor inicial fora da tela

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0, // Desliza para a posição 0 (visível)
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -200, // Desliza para fora da tela
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.button} onPress={() => { onClose(); navigation.navigate('Home'); }}>
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { onClose(); navigation.navigate('Events'); }}>
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { onClose(); alert('Ajuda'); }}>
          <Text style={styles.buttonText}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { onClose(); navigation.navigate('Login'); }}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    width: 200,
    height: '120%', // Pode deixar como 100% para ocupar toda a altura do SafeAreaView
    zIndex: 999,
  },
  safeArea: {
    flex: 1, // Permite que o SafeAreaView ocupe todo o espaço disponível
  },
  button: {
    backgroundColor: '#86aaf0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#86aaf0',
    fontSize: 16,
  },
});

export default MenuHamburger;






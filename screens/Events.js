import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importando a nova imagem da logo
const logo = require('../assets/logopretacomborda.jpg'); // Altere o caminho se necessário

const eventsData = [
  {
    id: 1,
    title: "Palestra",
    description: "Descrição: Participe de nossa palestra sobre inteligência artificial e descubra as últimas inovações e aplicações dessa tecnologia. Venha explorar o futuro da IA conosco!",
    local: "XXX/YYY",
    date: "XX/YY/ZZ",
    time: "XX:YY",
    image: require('../assets/ia.jpg'),
    category: "TI",
  },
  {
    id: 2,
    title: "Palestra e Trabalho voluntário!",
    description: "Descrição: Junte-se a nós para uma palestra informativa e saborosa sobre como criar hambúrgueres gourmet.",
    local: "XXX/YYY",
    date: "XX/YY/ZZ",
    time: "XX:YY",
    image: require('../assets/menu.jpg'),
    category: "Culinária",
  },
  {
    id: 3,
    title: "Palestra",
    description: "Descrição: Participe de nossa palestra sobre segurança da informação e saiba como proteger seus dados.",
    local: "XXX/YYY",
    date: "XX/YY/ZZ",
    time: "XX:YY",
    image: require('../assets/seguranca.jpg'),
    category: "Segurança",
  },
  {
    id: 4,
    title: "Palestra e Trabalho voluntário!",
    description: "Descrição: Junte-se a nós em XX/YY/ZZ para uma palestra sobre as amplas possibilidades de carreiras científicas.",
    local: "XXX/YYY",
    date: "XX/YY/ZZ",
    time: "XX:YY",
    image: require('../assets/mix.jpg'),
    category: "Ciências",
  },
];

export default function EventsScreen() {
  const navigation = useNavigation(); // Obtendo a função de navegação
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Filtra os eventos com base na categoria selecionada
  const filteredEvents = selectedCategory === 'Todos'
    ? eventsData
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <ScrollView style={styles.container}>
      {/* Nova logo centralizada no topo da página */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Texto 'Temas disponíveis:' abaixo da logo */}
      <Text style={styles.themesText}>Temas disponíveis:</Text>

      {/* Botões de filtro de tema com rolagem lateral */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => setSelectedCategory('Todos')} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Todos</Text>
          </TouchableOpacity>
          <Text style={styles.dash}>--</Text>
          <TouchableOpacity onPress={() => setSelectedCategory('TI')} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>T.I.</Text>
          </TouchableOpacity>
          <Text style={styles.dash}>--</Text>
          <TouchableOpacity onPress={() => setSelectedCategory('Culinária')} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Gastronomia</Text>
          </TouchableOpacity>
          <Text style={styles.dash}>--</Text>
          <TouchableOpacity onPress={() => setSelectedCategory('Segurança')} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Engenharia</Text>
          </TouchableOpacity>
          <Text style={styles.dash}>--</Text>
          <TouchableOpacity onPress={() => setSelectedCategory('Ciências')} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Ciências</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Renderiza os eventos filtrados */}
      {filteredEvents.map(event => (
        <View key={event.id} style={styles.eventRow}>
          <Image source={event.image} style={styles.image} />
          <View style={styles.eventContent}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventDetails}>Local: {event.local}</Text>
            <Text style={styles.eventDetails}>Data: {event.date}</Text>
            <Text style={styles.eventDetails}>Horário: {event.time}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EventDetail', { event })}
            >
              <Text style={styles.buttonText}>Inscrever-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Botão Voltar ao final da página */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
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
  logoContainer: {
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente se o espaço permitir
    marginBottom: 8,
  },
  logo: {
    width: '45%',
    height: 166,
    borderRadius: 20,
  },
  themesText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dash: {
    fontSize: 14,
    color: 'white',
    marginHorizontal: 4,
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  filterButtonText: {
    color: '#000',
    fontSize: 14,
  },
  eventRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 120,
    height: 160,
    resizeMode: 'cover',
    marginRight: 16,
  },
  eventContent: {
    flex: 1,
    flexDirection: 'column',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  eventDetails: {
    fontSize: 12,
    color: '#000',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#86aaf0', 
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#000',
    fontSize: 14,
  },
});

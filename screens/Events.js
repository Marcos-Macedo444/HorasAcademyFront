import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuHamburger from '../src/components/MenuHamburger'; // Importando o componente de menu

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
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [menuVisible, setMenuVisible] = useState(false);

  const filteredEvents = selectedCategory === 'Todos'
    ? eventsData
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <View style={styles.container}>
      {menuVisible && (
        <MenuHamburger navigation={navigation} isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
      )}

      {!menuVisible && ( // Esconde o botão quando o menu está visível
        <TouchableOpacity style={styles.hamburgerButton} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.hamburgerText}>≡</Text>
        </TouchableOpacity>
      )}

      <ScrollView style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <Text style={styles.themesText}>Temas disponíveis:</Text>

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

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  logo: {
    width: '48%',
    height: 178,
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
    backgroundColor: '#fff', // Definido fundo branco para os botões de filtro
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
  backButton: {
    backgroundColor: '#fff', // Fundo branco
    paddingVertical: 10, // Reduz o padding vertical
    paddingHorizontal: 50, // Reduz o padding horizontal
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center', // Centraliza o botão horizontalmente
    marginTop: 10, // Ajusta a distância do botão "Voltar" para os outros elementos
  },
  backButtonText: {
    fontSize: 16, // Mantém um tamanho de texto legível, mas um pouco menor
    color: 'black',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const windowWidth = Dimensions.get('window').width;

const ListarJogadores = () => {
  const [players, setPlayers] = useState([]);

  // Obtendo referência à coleção "real-madrid"
  const db = getFirestore(app);
  const teamCollectionRef = collection(db, 'real-madrid');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await getDocs(teamCollectionRef);
        setPlayers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    getPlayers();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {players.map((player) => (
          <View key={player.id} style={styles.card}>
            <Text style={styles.name}>Nome: {player.nome}</Text>
            <Text style={styles.details}>Camisa: {player.camisa}</Text>
            <Text style={styles.details}>Altura: {player.altura}m</Text>
            <Text style={styles.details}>
              Nascimento: {player.nascimento?.toDate().toLocaleDateString() || 'Data não disponível'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1ED', // Cor de fundo da paleta
  },
  scrollContainer: {
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: windowWidth * 0.9,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#FFC0CB', // Rosa claro
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 16, // Ajustado para fonte menor
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize:9, // Ajustado para fonte menor
    color: '#555',
    marginVertical: 2,
  },
});

export default ListarJogadores;

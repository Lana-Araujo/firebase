import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaginaPrincipal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Bem-vindo!</Text>
        <Button 
          title="Ver Jogadores" 
          onPress={() => navigation.navigate('ListarJogadores')} 
          color="#D87093" // Rosa claro
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF1ED',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D87093', // Rosa claro
    marginBottom: 20,
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFC0CB', // Rosa claro
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  boxText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PaginaPrincipal;

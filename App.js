import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RealizarLogin from './screens/realizarLogin'; // Certifique-se que o caminho está correto
import PaginaPrincipal from './screens/PaginaPrincipal';
import ListarJogadores from './screens/ListarJogadores';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RealizarLogin">
        <Stack.Screen 
          name="RealizarLogin" 
          component={RealizarLogin} 
          options={{ headerShown: false }}

        />
        <Stack.Screen 
          name="PaginaPrincipal" 
          component={PaginaPrincipal} 
          options={{ title: 'Página Principal' }}
        />
        <Stack.Screen 
          name="ListarJogadores" 
          component={ListarJogadores} 
          options={{ title: 'Listar Jogadores' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

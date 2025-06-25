//Atividade 1 de LAM -> 2º bimestre
//Realizada em trio:
//Carlos Alexandre, Miguel Sousa e Thiago Lucas

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import LoginScreen from './screens/LoginScreen';
import MoodSelectionScreen from './screens/MoodSelectionScreen';
import ResultScreen from './screens/ResultScreen';


export type RootStackParamList = {
  Login: undefined;
  MoodSelection: undefined;
  Result: { mood: 'Feliz' | 'Neutro' | 'Triste' };
};
const Navegacao = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator initialRouteName="Login">
        <Navegacao.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} />
        <Navegacao.Screen 
          name="MoodSelection" 
          component={MoodSelectionScreen} 
          options={{ title: 'Como você está se sentindo hoje?' }} />
        <Navegacao.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{ title: 'Seu Humor' }} />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
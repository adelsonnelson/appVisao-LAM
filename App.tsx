import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MoodSelectionScreen from './screens/MoodSelectionScreen';
import ResultScreen from './screens/ResultScreen';

export type RootStackParamList = {
  Login: undefined;
  MoodSelection: undefined;
  Result: { mood: 'Feliz' | 'Neutro' | 'Triste' };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} />
        <Stack.Screen 
          name="MoodSelection" 
          component={MoodSelectionScreen} 
          options={{ title: 'Como você está se sentindo hoje?' }} />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{ title: 'Seu Humor' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//Atividade 1 de LAM -> 2º bimestre
//Realizada em trio:
//Carlos Alexandre, Miguel Sousa e Thiago Lucas

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import CustomButton from '../components/CustomButton';

type MoodSelectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MoodSelection'
>;

type Props = {
  navigation: MoodSelectionScreenNavigationProp;
};

export default function MoodSelectionScreen({ navigation }: Props) {
  const pegarSelectMood = (mood: 'Feliz' | 'Neutro' | 'Triste') => {
    navigation.navigate('Result', { mood });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>
      <CustomButton
        title="😄 Feliz"
        onPress={() => pegarSelectMood('Feliz')}
      />
      <CustomButton
        title="😐 Neutro"
        onPress={() => pegarSelectMood('Neutro')}
      />
      <CustomButton
        title="😢 Triste"
        onPress={() => pegarSelectMood('Triste')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
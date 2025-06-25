//Atividade 1 de LAM -> 2º bimestre
//Realizada em trio:
//Carlos Alexandre, Miguel Sousa e Thiago Lucas

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ route, navigation }: Props) {
  const {mood} = route.params; //É o que traz o mood
  const [razao, setRazao] = useState('');
  const [moodMensagem, setMoodMensagem] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    if (mood === 'Feliz'){
      setMoodMensagem('Que bom que você está se sentindo feliz!');
      setEmoji('😄');
    }else if(mood === 'Neutro') {
      setMoodMensagem('Tudo bem não estar sempre bem.');
      setEmoji('😐');
    }else if (mood === 'Triste') {
      setMoodMensagem('Lembre-se que tudo passa.');
      setEmoji('😢');
    }
  },);

  return (
      <View style={styles.innerContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.message}>{moodMensagem}</Text>
        <TextInput
          style={styles.input}
          placeholder="Descreva o que te levou a registrar este humor..."
          value={razao}
          onChangeText={setRazao}
          multiline
        />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
      },
      emoji: {
        fontSize: 80,
        marginBottom: 20,
      },
      message: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 12,
        paddingTop: 10,
        width: '100%',
        backgroundColor: '#fff',
        textAlignVertical: 'top',
      },
});
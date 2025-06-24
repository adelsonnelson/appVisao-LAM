import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ route, navigation }: Props) {
  const { mood } = route.params;
  const [reason, setReason] = useState('');
  const [moodMessage, setMoodMessage] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    switch (mood) {
      case 'Feliz':
        setMoodMessage('Que bom que você está se sentindo feliz!');
        setEmoji('😄');
        break;
      case 'Neutro':
        setMoodMessage('Tudo bem não estar sempre bem.');
        setEmoji('😐');
        break;
      case 'Triste':
        setMoodMessage('Lembre-se que tudo passa. Se precisar, converse com alguém.');
        setEmoji('😢');
        break;
    }
  }, [mood]);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.message}>{moodMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="Descreva o que te levou a registrar este humor..."
          value={reason}
          onChangeText={setReason}
          multiline
        />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </KeyboardAvoidingView>
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

//Atividade 1 de LAM -> 2º bimestre
//Realizada em trio:
//Carlos Alexandre, Miguel Sousa e Thiago Lucas


import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const concluirLogin = () => {
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Insira um email válido.');
      return;
    }
    if (senha.length < 4) {
      Alert.alert('Erro', 'A senha deve ter 4 ou mais dígitos.');
      return;
    }
    if (email.toLowerCase() === 'adm@email' && senha === '1234') {
      navigation.navigate('MoodSelection');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={concluirLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
});
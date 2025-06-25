//Atividade 1 de LAM -> 2º bimestre
//Realizada em trio:
//Carlos Alexandre, Miguel Sousa e Thiago Lucas

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; //Tem que rodar: npm install --save-dev @types/react-native


type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
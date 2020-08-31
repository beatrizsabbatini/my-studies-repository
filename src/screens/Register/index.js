import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../styles';
import styles from './styles';

const Register = () => {
  const [emailText, setEmailText] = useState('');
  const [confirmEmailText, setConfirmEmailText] = useState('');
  const [passWordText, setPasswordText] = useState('');

  return (
    <View style={styles.background}>
      <Text>REGISTER SCREEN</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.LightGrey}
        mode="outlined"
        label="Digite um E-mail"
        value={emailText}
        onChangeText={(text) => setEmailText(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.LightGrey}
        mode="outlined"
        label="Digite uma senha"
        value={passWordText}
        onChangeText={(text) => setPasswordText(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.LightGrey}
        mode="outlined"
        label="Confirmar senha"
        value={confirmEmailText}
        onChangeText={(text) => setConfirmEmailText(text)}
      />
    </View>
  );
};

export default Register;

import firebase from 'firebase';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as Yup from 'yup';
import Button from '../../../../components/UI/Button';
import { colors } from '../../../../styles';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginErrors } from '../../../../store/ducks/login';

const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.loading);

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório!')
      .email('Digite um email válido!'),
    password: Yup.string().required('Campo obrigatório!'),
  });

  const loginService = async (values) => {

      dispatch(loginRequest());

      return await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          dispatch(loginSuccess())
          navigation.navigate('MainTabs');
        })
        .catch((error) => {
          dispatch(loginErrors(error))
          Alert.alert('Erro!', getMessageByErrorCode(error.code));
        });
      
    }
  
  function getMessageByErrorCode(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado! Crie uma conta para logar com esse e-mail.';
  
      case 'auth/wrong-password':
        return 'Senha incorreta! Tente novamente.';
  
      default:
        break;
    }
  }

  return (
    <Formik
      validationSchema={loginFormSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => loginService(values)}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.textInput}
            disabled={loading}
            mode="flat"
            label="E-mail"
            placeholderTextColor={colors.LightGrey}
            value={values.email}
            onChangeText={handleChange('email')}
            keyboardType="email-address"
          />
          {errors.email && (
            <Text style={styles.errorMessage}>{errors.email}</Text>
          )}
          <TextInput
            disabled={loading}
            secureTextEntry
            style={styles.textInput}
            placeholderTextColor={colors.LightGrey}
            mode="flat"
            label="Senha"
            value={values.password}
            onChangeText={handleChange('password')}
          />
          {errors.password && (
            <Text style={styles.errorMessage}>{errors.password}</Text>
          )}
          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => navigation.navigate('Register')}
              disabled={loading ? true : false}
              buttonText="Criar Conta"
              backgroundColor={colors.White}
              borderColor={colors.Purple}
              textColor={loading ? colors.InactivePurpleButton : colors.Purple}
              width="48%"
            />
            <Button
              disabled={loading ? true : false}
              onPress={() => {
                handleSubmit(values);
              }}
              buttonText="Entrar"
              backgroundColor={
                loading ? colors.InactivePurpleButton : colors.Purple
              }
              textColor={colors.White}
              width="48%"
            />
          </View>
          {loading && (
            <ActivityIndicator
              color={colors.Purple}
              size="large"
              style={styles.loading}
            />
          )}
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

import firebase from 'firebase';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as Yup from 'yup';
import Button from '../../components/UI/Button';
import { colors } from '../../styles';
import styles from './styles';

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const registerFormSchema = Yup.object().shape({
    name: Yup.string()
    .required('Campo obrigatório!'),
    email: Yup.string()
      .required('Campo obrigatório!')
      .email('Digite um email válido!')
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),
    password: Yup.string().required('Campo obrigatório!'),
    confirmPassword: Yup.string()
      .required('Campo obrigatório!')
      .oneOf(
        [Yup.ref('password'), null],
        'As senhas digitadas não são iguais!'
      ),
  });

  const handleSignIn = (values) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        Alert.alert(
          'Usuário criado!',
          'Deseja realizar o login com este usuário?',
          [
            {
              text: 'Sim',
              onPress: () => {
                navigation.navigate('MainTabs');
                setLoading(false);
              },
            },
            {
              text: 'Não',
              onPress: () => {
                navigation.navigate('Login');
                setLoading(false);
              },
            },
          ]
        );
      })
      .catch((error) => {
        Alert.alert('Erro!', getMessageByErrorCode(error.code));
        setLoading(false);
      });
  };

  function getMessageByErrorCode(code) {
    console.log(code);
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Já existe um usuário com esse e-mail cadastrado! Crie uma conta com outro e-mail.';

      case 'auth/weak-password':
        return 'Senha fraca! Digite uma senha com no mínimo 6 caracteres.';

      default:
        break;
    }
  }

  return (
    <View style={styles.background}>
      <Formik
        validationSchema={registerFormSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => handleSignIn(values)}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <>
            <View>
            <TextInput
                disabled={loading}
                style={styles.textInput}
                placeholderTextColor={colors.LightGrey}
                mode="flat"
                label="Digite seu nome"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {errors.name && (
                <Text style={styles.errorMessage}>{errors.name}</Text>
              )}
              <TextInput
                disabled={loading}
                style={styles.textInput}
                placeholderTextColor={colors.LightGrey}
                mode="flat"
                label="Digite um E-mail"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              <TextInput
                secureTextEntry
                disabled={loading}
                style={styles.textInput}
                placeholderTextColor={colors.LightGrey}
                mode="flat"
                label="Digite uma senha (mínimo 6 caracteres)"
                value={values.password}
                onChangeText={handleChange('password')}
              />
              {errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
              <TextInput
                secureTextEntry
                disabled={loading}
                style={styles.textInput}
                placeholderTextColor={colors.LightGrey}
                mode="flat"
                label="Confirmar senha"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorMessage}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
            <Button
              disabled={loading ? true : false}
              onPress={() => {
                handleSubmit(values);
              }}
              backgroundColor={colors.Purple}
              buttonText="CONCLUIR CADASTRO"
              textColor={colors.White}
              padding={15}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Register;

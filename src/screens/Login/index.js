import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import LoginForm from './components/LoginForm';
import styles from './styles';

const Login = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <LoginForm navigation={navigation} />
    </ScrollView>
  );
};

export default Login;

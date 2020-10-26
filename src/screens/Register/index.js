import React from 'react';

import { View } from 'react-native';

import RegisterForm from './components/RegisterForm';
import styles from './styles';

const Register = ({navigation}) => {

  return (
    <View style={styles.background}>
     <RegisterForm navigation={navigation}/>
    </View>
  );
};

export default Register;

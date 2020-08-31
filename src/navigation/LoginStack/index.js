import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Stack = createStackNavigator();

const LoginNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Cadastre-se',
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;

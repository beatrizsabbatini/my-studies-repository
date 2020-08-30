import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { AddThemeModalProvider } from './src/contexts/AddThemeModalContext';
import AppNavigator from './src/navigation/index';

export default function App() {
  return (
    <AddThemeModalProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AddThemeModalProvider>
  );
}

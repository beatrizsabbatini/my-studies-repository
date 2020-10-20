import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import React from 'react';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AddThemeModalProvider } from './src/contexts/AddThemeModalContext';
import AppNavigator from './src/navigation/index';
import { colors, metrics } from './src/styles';
import { firebaseConfig } from './firebase';

export default function App() {
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.Purple,
      background: 'transparent',
    },
    roundness: metrics.smallMargin,
  };

  return (
    <PaperProvider theme={theme}>
      <AddThemeModalProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AddThemeModalProvider>
    </PaperProvider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AddThemeModalProvider } from './src/contexts/AddThemeModalContext';
import AppNavigator from './src/navigation/index';
import { colors, metrics } from './src/styles';
import { firebaseConfig } from './firebase';
import { setNavigator } from './src/services/navigationService';
import store from './src/store';
import { EditThemeModalProvider } from './src/contexts/EditThemeModalContext';
import { CurrentPictureProvider } from './src/contexts/CurrentPictureContext';

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
      <CurrentPictureProvider>
        <AddThemeModalProvider>
          <EditThemeModalProvider>
            <Provider store={store}>
              <NavigationContainer ref={navigatorRef => {
                setNavigator(navigatorRef);
                }}>
                <AppNavigator />
              </NavigationContainer>
            </Provider>
          </EditThemeModalProvider>
        </AddThemeModalProvider>
      </CurrentPictureProvider>
    </PaperProvider>
  );
}

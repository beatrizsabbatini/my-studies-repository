import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const BackgroundIconAndMessage = ({ message, children }) => {
  return (
    <View style={styles.backgroundIconContainer}>
      {children}
      <Text style={styles.backgroundMessage}>{message}</Text>
    </View>
  );
};

export default BackgroundIconAndMessage;

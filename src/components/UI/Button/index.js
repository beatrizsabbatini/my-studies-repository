import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({
  buttonText,
  onPress,
  backgroundColor,
  textColor,
  width,
  disabled,
  borderColor,
  padding,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          width: width,
          borderColor: borderColor || 'transparent',
          padding: padding || 5,
        },
      ]}
    >
      <Text style={[{ color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

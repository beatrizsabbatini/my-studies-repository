import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import styles from './styles'

const ColorBox = ({backgroundColor, isSelected}) => {
  return (
    <View style={[styles.box, {backgroundColor: backgroundColor }]}>
      <Feather name="check" size={24} color="black" style={{display: isSelected ? 'flex' : 'none' }} />
    </View>
  )
}

export default ColorBox;
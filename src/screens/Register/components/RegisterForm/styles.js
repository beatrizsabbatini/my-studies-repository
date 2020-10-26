import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../.././../styles';

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginVertical: metrics.baseMargin,
  },
  errorMessage: {
    color: colors.Red,
    fontSize: fonts.small,
    textAlign: 'center'
  },
});

export default styles;
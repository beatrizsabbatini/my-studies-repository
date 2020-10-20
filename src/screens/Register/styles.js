import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.White,
    padding: metrics.bigMargin,
    justifyContent: 'space-around',
    flex: 1,
  },
  textInput: {
    width: '100%',
    marginVertical: metrics.baseMargin,
  },
  errorMessage: {
    color: colors.Red,
    fontSize: fonts.small,
    textAlign: 'center',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({
  backgroundIconContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundMessage: {
    fontWeight: 'bold',
    color: colors.LightGrey,
    fontSize: fonts.big,
    textAlign: 'center',
    padding: metrics.doubleBaseMargin,
  },
});

export default styles;

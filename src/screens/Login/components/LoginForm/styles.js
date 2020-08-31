import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
  },
  textInput: {
    width: '100%',
    marginVertical: metrics.baseMargin,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.bigMargin,
  },
  loading: {
    flex: 1,
    alignSelf: 'center',
  },
  errorMessage: {
    color: colors.Red,
    fontSize: fonts.small,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  background: {
    flex: 3,
    backgroundColor: colors.White,
    padding: metrics.bigMargin,
    alignItems: 'center',
  },
  logo: {
    height: 80,
    resizeMode: 'contain',
  },
  inputsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
  },
  textInput: {
    height: 30,
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
});

export default styles;

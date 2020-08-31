import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    borderRadius: metrics.smallRadius,
    width: '80%',
    height: 'auto',
    backgroundColor: colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.bigMargin,
  },
});

export default styles;

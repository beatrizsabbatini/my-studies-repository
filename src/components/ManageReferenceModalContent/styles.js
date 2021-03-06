import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: metrics.doubleBaseMargin,
  },
  button: {
    padding: metrics.baseMargin,
    borderRadius: metrics.smallMargin,
    borderWidth: 1,
    borderColor: colors.Purple,
    width: '48%',
    alignItems: 'center',
  },
  deleteButton:{
    marginTop: 15,
    padding: metrics.baseMargin,
    borderRadius: metrics.smallMargin,
    backgroundColor: colors.Red,
    width: '100%',
    alignItems: 'center',
  },
  cancel: {
    backgroundColor: colors.White,
    color: colors.Purple,
  },
  save: {
    color: colors.White,
    backgroundColor: colors.Purple,
  },
  modalTitle: {
    padding: metrics.baseMargin,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },
});

export default styles;

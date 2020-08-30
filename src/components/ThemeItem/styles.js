import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  themeContainer: {
    backgroundColor: colors.White,
    width: '31%',
    height: 105,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: metrics.smallMargin,
    padding: metrics.smallMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  themeName: {
    fontSize: fonts.regular,
    paddingTop: metrics.smallMargin,
  },
  modalBackground: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContainer: { width: 400, height: 400, backgroundColor: colors.White },
});

export default styles;

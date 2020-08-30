import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: metrics.smallMargin,
    marginVertical: metrics.smallMargin,
    marginHorizontal: 2,
    padding: metrics.baseMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  lastItemContainer: {
    marginBottom: 45,
  },
  title: {
    fontSize: fonts.regular,
  },
  subtitle: {
    fontSize: fonts.medium,
    color: colors.TextGrey,
  },
  subtitleItems: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
  },
  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  userName: {
    fontSize: fonts.small,
    color: colors.Purple,
    width: '50%',
    textAlign: 'right',
  },
});

export default styles;

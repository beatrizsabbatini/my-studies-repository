import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  itemAndUserContainer: {
    marginVertical: metrics.smallMargin,
    marginHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.White,
    borderTopEndRadius: metrics.smallMargin,
    borderTopStartRadius: metrics.smallMargin,
    padding: metrics.baseMargin,
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
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.White,
    padding: metrics.baseMargin,
    borderTopColor: colors.LightGrey,
    borderTopWidth: 1,
    width: '100%',
  },
});

export default styles;

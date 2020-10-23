import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  background:{ 
    flex: 1, 
    alignItems:'center',
    justifyContent:'center' 
  },
  button:{
    textTransform: 'uppercase',
    textDecorationLine: "underline",
    fontWeight: 'bold',
    color: colors.Purple,
    paddingTop: 30,
    paddingHorizontal: 20
  },
})

export default styles;
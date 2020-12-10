import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { lightYellow, sweetPink, lightBlueSky, greyBlue } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'black',
    borderColor: 'white',
    color: 'white',
    margin: 3,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});

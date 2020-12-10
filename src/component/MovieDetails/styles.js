import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { searchBlue, interactiveBlue, darkBlueShade, sweetPink  } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'black',
    margin: 0,

  },
  posterContainer:{
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 3
  },
  poster:{
    width: 200,
    height: 250,
    margin: 10,
    borderWidth: 2,
    borderColor: 'white'
  },
  titleText:{
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 7,
    color: 'white'
  },
  detailText:{
    margin: 2,
    fontSize: 16,
    color: 'white'
  }
});

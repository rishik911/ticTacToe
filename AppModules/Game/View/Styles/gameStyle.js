import {StyleSheet} from 'react-native';

export const GameStyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightskyblue',
  },
  container: {
    borderWidth: 10,
    width: 100,
    height: 100,
    borderColor: 'green',
  },
  iconStyle: {
    fontSize: 70,
    color: 'red',
  },
  font: {
    paddingTop: 5,
    fontSize: 30,
  },
  iconStyle1: {
    fontSize: 70,
    color: 'green',
  },
  leftTop: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  middleTop: {
    borderTopWidth: 0,
  },
  rightTop: {
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  middleLeft: {
    borderLeftWidth: 0,
  },
  middleRight: {
    borderRightWidth: 0,
  },
  bottomLeft: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomMiddle: {
    borderBottomWidth: 0,
  },
  bottomRight: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
});

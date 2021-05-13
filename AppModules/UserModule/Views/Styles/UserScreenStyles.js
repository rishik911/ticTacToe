import {Dimensions, StyleSheet} from 'react-native';

export const UserScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    top: Dimensions.get('window').height / 4,
    backgroundColor: '#eeeeee',
  },
  titleContainer: {
    marginHorizontal: 100,
    elevation: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#dcd0d0',
  },
  gameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameTypeContainer: {
    flex: 1,
    top: 50,
    borderRadius: 50,
    backgroundColor: '#dcd0d0',
    elevation: 10,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    top: 30,
    alignItems: 'center',
  },
  textInputView: {
    borderBottomWidth: 1,
    borderBottomColor: '#635c5c',
    width: Dimensions.get('window').width / 1.5,
  },
  semiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    // right : 20 ,
    top: 10,
  },
  icon : {
    paddingHorizontal : 50,
    paddingTop : 50
  }
});

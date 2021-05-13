import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {UserScreenStyles} from './Styles/UserScreenStyles';
import {getGameTypeAction, getUserNameAction} from '../Redux/actions';
import {CONSTANTS} from '../UTILS/constats';
import {isValidString} from '../../../MyApp/Utils/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = props => {
  const dispatch = useDispatch();
  const [gameType, setGameType] = useState('');
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');

  const dispatchActions = () => {
    if (
      isValidString(gameType) &&
      isValidString(user1) &&
      isValidString(user2)
    ) {
      dispatch(getGameTypeAction(gameType));
      dispatch(getUserNameAction(user1, user2));
      props.navigation.navigate('GameScreen');
    }
  };

  const renderInputs = () => {
    if (!isValidString(user2) && gameType === CONSTANTS.ANDROID_GAME) {
      setUser2('ANDROID');
    }
    return (
      <View style={UserScreenStyles.inputContainer}>
        <View style={UserScreenStyles.semiContainer}>
          <TextInput
            value={user1}
            placeholder="Player 1 name"
            onChangeText={value => setUser1(value)}
            style={UserScreenStyles.textInputView}
          />
          {isValidString(user1) && (
            <Icon
              name="times"
              size={25}
              style={UserScreenStyles.iconStyle}
              onPress={() => setUser1('')}
            />
          )}
        </View>
        <View style={UserScreenStyles.semiContainer}>
          <TextInput
            value={user2}
            placeholder="Player 1 name"
            editable={
              isValidString(gameType) && gameType !== CONSTANTS.ANDROID_GAME
            }
            style={UserScreenStyles.textInputView}
            onChangeText={value => setUser2(value)}
          />
          {isValidString(gameType) &&
            gameType !== CONSTANTS.ANDROID_GAME &&
            isValidString(user2) && (
              <Icon
                name="times"
                size={25}
                style={UserScreenStyles.iconStyle}
                onPress={() => setUser2('')}
              />
            )}
        </View>
        <View style={UserScreenStyles.semiContainer}>
          <Icon
            name="arrow-left"
            size={50}
            style={UserScreenStyles.icon}
            color="red"
            onPress={() => setGameType('')}
          />
          <Icon
            name="check"
            size={50}
            style={UserScreenStyles.icon}
            color="green"
            onPress={() => dispatchActions()}
          />
        </View>
      </View>
    );
  };

  const renderSelectGame = () => {
    return (
      <View style={UserScreenStyles.secondContainer}>
        <TouchableOpacity
          onPress={() => setGameType(CONSTANTS.OFFLINE_GAME)}
          style={[UserScreenStyles.gameTypeContainer]}>
          <Text> Multiplayer (Offline)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGameType(CONSTANTS.ANDROID_GAME)}
          style={[UserScreenStyles.gameTypeContainer]}>
          <Text> Against Android !!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={UserScreenStyles.mainContainer}>
      <View style={UserScreenStyles.titleContainer}>
        <Text style={UserScreenStyles.gameText}>
          {isValidString(gameType) ? gameType : CONSTANTS.SELECT_GAME}{' '}
        </Text>
      </View>
      {isValidString(gameType) ? renderInputs() : renderSelectGame()}
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getGameTypeAction,
  getUserNameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

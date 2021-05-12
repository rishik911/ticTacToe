import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GameStyles} from './Styles/gameStyle';

const Game = () => {
  const x = 3;
  const length = Array(3).fill(0);
  const [gameState, setGameState] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = React.useState(1);

  React.useEffect(() => {
    getInitialState();
  }, []);

  const getInitialState = () => {
    setGameState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setCurrentPlayer(1);
  };

  const getWinner = () => {
    const arr = gameState;
    let sum = 0;

    for (let i = 0; i < x; i++) {
      sum = 0;
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === x) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }

    for (let i = 0; i < x; i++) {
      sum = 0;
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }
    //sum=0
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }
    //sum=0
    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    return 0;
  };

  const onTilePress = (row, col) => {
    const value = gameState[row][col];
    if (value !== 0) {
      return;
    }

    const arr = gameState.slice();
    arr[row][col] = currentPlayer;
    setGameState(arr);

    let next = currentPlayer === 1 ? -1 : 1;
    setCurrentPlayer(next);
    const winner = getWinner();
    if (winner === 1) {
      Alert.alert('X won the Game!!');
      getInitialState();
    } else if (winner === -1) {
      Alert.alert('O won the game!!');
      getInitialState();
    }
  };

  const renderIcon = (row, col) => {
    let val = gameState[row][col];
    switch (val) {
      case 1:
        return <Icon name="close" style={GameStyles.iconStyle} />;
      case -1:
        return <Icon name="circle-outline" style={GameStyles.iconStyle1} />;
      default:
        return <View />;
    }
  };

  const resetHandler = () => {
    getInitialState();
  };
  return (
    <View style={GameStyles.main}>
      <View style={{flexDirection: 'row'}}>
        {length.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onTilePress(0, index)}
              style={[
                GameStyles.container,
                index === 0 && GameStyles.leftTop,
                index === 1 && GameStyles.middleTop,
                index === 2 && GameStyles.rightTop,
              ]}>
              {renderIcon(0, index)}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flexDirection: 'row'}}>
        {length.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onTilePress(1, index)}
              v
              style={[
                GameStyles.container,
                index === 0 && GameStyles.middleLeft,
                index === 2 && GameStyles.middleRight,
              ]}>
              {renderIcon(1, index)}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flexDirection: 'row'}}>
        {length.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onTilePress(2, index)}
              style={[
                GameStyles.container,
                index === 0 && GameStyles.bottomLeft,
                index === 1 && GameStyles.bottomMiddle,
                index === 2 && GameStyles.bottomRight,
              ]}>
              {renderIcon(2, index)}
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        <TouchableOpacity onPress={() => resetHandler()}>
          <Text style={GameStyles.font}>Reset game!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Game;

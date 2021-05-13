import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Alert, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GameStyles} from './Styles/gameStyle';
import {getAutomatedData} from '../utils/helpers';
import {connect} from 'react-redux';
import {isValidString} from '../../../MyApp/Utils/helpers';
import {CONSTANTS} from '../../UserModule/UTILS/constats';

const Game = props => {
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const x = 3;
  const length = Array(3).fill(0);
  const [gameState, setGameState] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [spring, setSpring] = useState(new Animated.Value(0));
  const [isPlayer, seIsPlayer] = useState(true);
  const [winner, setWinner] = useState(0);
  const [count, setCount] = useState(0);
  const [game, setGame] = useState('');
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [animatedValue, setAnimatedValues] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  React.useEffect(() => {
    if (isValidString(props.gameType) && !isValidString(game)) {
      setGame(props.gameType);
    }
    if (isValidString(props.user1) && !isValidString(user1)) {
      setUser1(props.user1);
    }
    if (isValidString(props.user2) && !isValidString(user2)) {
      setUser2(props.user2);
    }
    getInitialState();
  }, [props]);

  const getInitialState = () => {
    setGameState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setAnimatedValues([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setCurrentPlayer(1);
    seIsPlayer(true);
  };

  React.useEffect(() => {
    if (
      isValidString(game) &&
      game === CONSTANTS.ANDROID_GAME &&
      currentPlayer === -1 &&
      winner === 0
    ) {
      const data = getAutomatedData(gameState);
      let gameData = gameState.slice();
      gameData[data[0]][data[1]] = currentPlayer;
      setGameState(gameData);
      getWinner();
      seIsPlayer(!isPlayer);
      setCurrentPlayer(1);
    }
  }, [currentPlayer, gameState, isPlayer]);

  const getWinner = () => {
    if (count > 9) {
      setWinner(2);
      return;
    }
    const arr = gameState;
    let sum = 0;
    setCount(count + 1);
    for (let i = 0; i < x; i++) {
      sum = 0;
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === x) {
        setWinner(1);
      } else if (sum === -3) {
        setWinner(-1);
      }
    }

    for (let i = 0; i < x; i++) {
      sum = 0;
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        setWinner(1);
      } else if (sum === -3) {
        setWinner(-1);
      }
    }
    //sum=0
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) {
      setWinner(1);
    } else if (sum === -3) {
      setWinner(-1);
    }
    //sum=0
    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum === 3) {
      setWinner(1);
    } else if (sum === -3) {
      setWinner(-1);
    }

    return 0;
  };
  const updatePressedTiles = (row, col) => {
    setTimeout(() => {
      let arr = animatedValue.slice();
      arr[row][col] = currentPlayer;
      setAnimatedValues(arr);
    }, 300);
  };
  const onTilePress = (row, col) => {
    renderSpringAnimation(row, col);
    updatePressedTiles(row, col);
    const value = gameState[row][col];
    if (value !== 0) {
      return;
    }

    const arr = gameState.slice();
    arr[row][col] = currentPlayer;
    setGameState(arr);
    let next = currentPlayer === 1 ? -1 : 1;
    setCurrentPlayer(next);
    getWinner();
    isValidString(game) &&
      game === CONSTANTS.ANDROID_GAME &&
      seIsPlayer(!isPlayer);
  };

  const renderSpringAnimation = (row, col) => {
    Animated.spring(spring, {
      toValue: 1,
      friction: 10,
      velocity: 10,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const isSquarePresses = (row, col) => {
    let val = animatedValue[row][col];
    return val === 0;
  };

  const renderIcon = (row, col) => {
    isSquarePresses(row, col);
    const springView = {
      transform: [{scale: spring}],
    };
    let val = gameState[row][col];
    switch (val) {
      case 1:
        return (
          <AnimatedIcon
            name="close"
            style={[
              GameStyles.iconStyle,
              isSquarePresses(row, col) && springView,
            ]}
          />
        );
      case -1:
        return (
          <AnimatedIcon
            name="circle-outline"
            style={[
              GameStyles.iconStyle1,
              isSquarePresses(row, col) && springView,
            ]}
          />
        );
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
              disabled={!isPlayer || winner !== 0}
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
              disabled={!isPlayer || winner !== 0}
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
              disabled={!isPlayer || winner !== 0}
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

const mapStateToProps = state => ({
  user1: state.userState.user1,
  user2: state.userState.user2,
  gameType: state.userState.gameType,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

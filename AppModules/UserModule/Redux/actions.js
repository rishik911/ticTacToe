import {TYPES} from './types';

export const getUserNameAction = (user1, user2) => {
  return {
    type: TYPES.GET_USER,
    user1,
    user2,
  };
};

export const getGameTypeAction = gameType => {
  return {
    type: TYPES.GAME_TYPE,
    gameType,
  };
};

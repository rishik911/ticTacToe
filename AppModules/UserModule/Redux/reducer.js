import {TYPES} from './types';

const INITIAL_STATE = {
  gameType: null,
  user1: null,
  user2: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GAME_TYPE:
      return {
        ...state,
        gameType: action.gameType,
      };
    case TYPES.GET_USER:
      return {
        ...state,
        user1: action.user1,
        user2: action.user2,
      };
    default:
      return  true
  }
};

import {combineReducers} from 'redux';
import Reducer from '../../AppModules/UserModule/Redux/reducer';
const appReducer = combineReducers({
  userState: Reducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

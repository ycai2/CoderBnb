import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SpotsReducer from './spots_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotsReducer
});

export default RootReducer;

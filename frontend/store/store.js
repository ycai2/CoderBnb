import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import SessionMiddleware from '../middleware/session_middleware';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
      RootReducer,
      preloadedState,
      RootMiddleware
  )
);

export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../reducers/root_reducer';
import SessionMiddleware from '../middleware/session_middleware';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
      RootReducer,
      preloadedState,
      compose(
        RootMiddleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
  )
);

export default configureStore;

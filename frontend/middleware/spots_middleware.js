import { REQUEST_SPOTS, RECEIVE_SPOTS } from '../actions/spot_actions.js';

const SpotsMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_SPOTS:
      console.log('requesting...');
      return next(action);
    default:
      return next(action);
  }
}

export default SpotsMiddleware;

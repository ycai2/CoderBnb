import { REQUEST_SPOTS, RECEIVE_SPOTS, receiveSpots } from '../actions/spot_actions.js';
import { fetchSpots } from '../util/spot_api_util';

const SpotsMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_SPOTS:
      const success = data => dispatch(receiveSpots(data));
      fetchSpots(success);
      return next(action);
    default:
      return next(action);
  }
}

export default SpotsMiddleware;

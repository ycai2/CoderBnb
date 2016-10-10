import { REQUEST_SPOTS, RECEIVE_SPOTS, receiveSpots } from '../actions/spot_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { fetchSpots } from '../util/spot_api_util';

const SpotsMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      next(action);
      dispatch(requestSpots());
      break;
    case REQUEST_SPOTS:
      const success = data => dispatch(receiveSpots(data));
      const filters = getState().filters;
      fetchSpots(filters, success);
      break;
    default:
      return next(action);
  }
}

export default SpotsMiddleware;

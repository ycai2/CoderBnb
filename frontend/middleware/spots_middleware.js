import {
  REQUEST_SPOTS,
  
  RECEIVE_SPOTS,
  CREATE_SPOT,
  receiveSpots,
  receiveSpot,
  requestSpots
} from '../actions/spot_actions';
import { UPDATE_BOUNDS, UPDATE_FILTERS } from '../actions/filter_actions';
import { fetchSpots, createSpot } from '../util/spot_api_util';

const SpotsMiddleware = ({getState, dispatch}) => next => action => {
  const spotsSuccess = (data) => {
    dispatch(receiveSpots(data));
  };
  const spotSuccess = (spot) => {
    dispatch(receiveSpot(spot));
  };
  switch (action.type) {
    case UPDATE_BOUNDS:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_FILTERS:
      next(action);
      dispatch(requestSpots());
      break;

    case REQUEST_SPOTS:
      const filters = getState().filters;
      fetchSpots(filters, spotsSuccess);
      break;

    case CREATE_SPOT:
      createSpot(action.spot, spotSuccess);
      break;

    default:
      return next(action);
  }
}

export default SpotsMiddleware;

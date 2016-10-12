import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';

const SpotsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      return action.currentSpot;

    default:
      return state;
  }
}

export default SpotsReducer;

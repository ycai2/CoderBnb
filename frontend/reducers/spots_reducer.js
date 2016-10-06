import { RECEIVE_SPOTS } from '../actions/spot_actions';

const SpotsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    default:
      return state;
  }
}

export default SpotsReducer;

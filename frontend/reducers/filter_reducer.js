import { UPDATE_BOUNDS, UPDATE_LOCATION } from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  bounds: {},
  location: {}
});

const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      return merge({}, state, {bounds: action.bounds});
    case UPDATE_LOCATION:
      return merge({}, state, {location: action.location});
    default:
      return state;
  }
};

export default FilterReducer;

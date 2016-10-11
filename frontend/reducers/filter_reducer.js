import { UPDATE_BOUNDS, UPDATE_LOCATION, UPDATE_FILTERS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  bounds: {},
  coords: {},
  location: {},
  focusedInput: null,
  startDate: null,
  endDate: null,
  guest_count: 1,
  room_type: {
    basement: false,
    lab: false,
    penthouse: false
  },
  min_price: 1,
  max_price: 1000
});

const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      return merge({}, state, {
        bounds: action.bounds
      });

    case UPDATE_LOCATION:
      return merge({}, state, {
        coords: action.coords,
        location: action.location
      });

    case UPDATE_FILTERS:
      return merge({}, state, action.filters);

    default:
      return state;
  }
};

export default FilterReducer;

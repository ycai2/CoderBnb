import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  spots: [],
  filters: {
    bounds: {}
  }
});

const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      const newFilter = {
        filters: {
          bounds: action.bounds
        }
      }
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default FilterReducer;

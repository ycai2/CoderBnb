import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT,
  CLEAR_ERRORS,
} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return {
        currentUser: action.user,
        errors: []
      };
    }

    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };

    case LOGOUT:
      return {
        currentUser: null,
        errors: []
      };

    case CLEAR_ERRORS:
      return {
        currentUser: state.currentUser,
        errors: []
      }

    default:
      return state;
  }
};

export default SessionReducer;

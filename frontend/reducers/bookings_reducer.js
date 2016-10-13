import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;

    default:
      return state;
  }
}

export default BookingsReducer;

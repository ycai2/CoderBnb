import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;

    case RECEIVE_BOOKING:
      return { [action.currentBooking.id]: action.currentBooking }

    default:
      return state;
  }
}

export default BookingsReducer;

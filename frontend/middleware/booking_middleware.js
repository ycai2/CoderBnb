import {
  CREATE_BOOKING,
  REQUEST_BOOKINGS,
  receiveBookings
} from '../actions/booking_actions';
import { createBooking, fetchBookings } from '../util/booking_api_util';

const BookingMiddleware = ({getState, dispatch}) => next => action => {
  const bookingsSuccess = (data) => {
    dispatch(receiveBookings(data));
  };
  const bookingSuccess = (booking) => {
    // dispatch(receiveBooking(booking));
    console.log('Successfully booked!');
  };
  switch (action.type) {
    case CREATE_BOOKING:
      createBooking(action.booking, bookingSuccess);
      break;

    case REQUEST_BOOKINGS:
      fetchBookings(bookingsSuccess);
      break;

    default:
      return next(action);
  }
}

export default BookingMiddleware;

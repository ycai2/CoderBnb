import {
  CREATE_BOOKING,
  REQUEST_BOOKINGS,
  REQUEST_BOOKING,
  receiveBookings,
  receiveBooking
} from '../actions/booking_actions';
import { hashHistory } from 'react-router';
import { createBooking, fetchBookings, fetchBooking } from '../util/booking_api_util';

const BookingMiddleware = ({getState, dispatch}) => next => action => {
  const bookingsSuccess = (data) => {
    dispatch(receiveBookings(data));
  };
  const bookingSuccess = () => {
    hashHistory.replace('/bookings');
  };
  switch (action.type) {
    case CREATE_BOOKING:
      createBooking(action.booking, bookingSuccess);
      break;

    case REQUEST_BOOKINGS:
      fetchBookings(bookingsSuccess);
      break;

    case REQUEST_BOOKING:
      const requestSuccess = (data) => {
        dispatch(receiveBooking(data));
      };
      fetchBooking(action.id, requestSuccess);
      break;

    default:
      return next(action);
  }
}

export default BookingMiddleware;

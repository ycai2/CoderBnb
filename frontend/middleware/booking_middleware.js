import {
  CREATE_BOOKING
} from '../actions/booking_actions';
import { createBooking } from '../util/booking_api_util';

const BookingMiddleware = ({getState, dispatch}) => next => action => {
  const bookingsSuccess = (data) => {
    // dispatch(receiveBookings(data));
  };
  const bookingSuccess = (booking) => {
    // dispatch(receiveBooking(booking));
    console.log('Successfully booked!');
  };
  switch (action.type) {
    case CREATE_BOOKING:
      createBooking(action.booking, bookingSuccess);
      break;
    default:
      return next(action);
  }
}

export default BookingMiddleware;

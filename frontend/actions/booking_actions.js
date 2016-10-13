export const CREATE_BOOKING = 'CREATE_BOOKING';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const createBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking
});

export const receiveBooking = (currentBooking) => ({
  type: RECEIVE_BOOKING,
  currentBooking
});

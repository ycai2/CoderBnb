export const createBooking = (booking, success) => {
  $.ajax({
    url: 'api/bookings',
    method: 'post',
    data: {
      booking
    },
    success,
    error: (e) => console.log(e),
  });
};

export const fetchBookings = (success) => {
  $.ajax({
    url: 'api/bookings',
    success,
    error: (e) => console.log(e),
  });
};

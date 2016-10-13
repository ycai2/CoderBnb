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

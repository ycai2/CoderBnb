export const createBooking = (booking, success) => {
  $.ajax({
    url: 'api/bookings',
    method: 'post',
    data: {
      booking
    },
    success,
    error: (e) => {
      e.responseJSON.forEach((error) => {
        toastr["error"](error, "error");
      });
    },
  });
};

export const fetchBookings = (success) => {
  $.ajax({
    url: 'api/bookings',
    success,
    error: (e) => {
      e.responseJSON.forEach((error) => {
        toastr["error"](error, "error")
      });
    },
  });
};

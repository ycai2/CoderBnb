export const createReview = (bookingId, review, success) => {
  $.ajax({
    url: `api/bookings/${bookingId}/review`,
    method: 'post',
    data: {
      review
    },
    success,
    error: (e) => {
      e.responseJSON.forEach((error) => {
        toastr["error"](error, "error");
      });
    },
  });
};

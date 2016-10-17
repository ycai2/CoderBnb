export const fetchSpots = (filters, success) => {
  if (filters.startDate) {
    filters.startDate = filters.startDate.toString();
  }
  if (filters.endDate) {
    filters.endDate = filters.endDate.toString();
  }
  $.ajax({
    url: 'api/spots',
    data: {
      filters
    },
    success,
    error: (e) => {
      e.responseJSON.forEach((error) => {
        toastr["error"](error, "error");
      });
    },
  });
};

export const createSpot = (spot, success) => {
  $.ajax({
    url: 'api/spots',
    method: 'post',
    contentType: false,
    processData: false,
    data: spot,
    success,
    error: (e) => {
      e.responseJSON.forEach((error) => {
        toastr["error"](error, "error");
      });
    },
  });
};

export const fetchSpot = (id, success) => {
  $.ajax({
    url: `api/spots/${id}`,
    success,
    error: (e) => {
      e.responseJSON.forEach((error) => {
        toastr["error"](error, "error");
      });
    },
  });
}

export const fetchSpots = (filters, success) => {
  $.ajax({
    url: 'api/spots',
    data: {
      filters
    },
    success,
    error: () => console.log('error'),
  });
};

export const createSpot = (spot, success) => {
  debugger
  $.ajax({
    url: 'api/spots/new',
    method: 'post',
    data: {
      spot
    },
    success,
    error: () => console.log('error'),
  });
};

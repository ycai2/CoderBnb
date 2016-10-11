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
    error: () => console.log('error'),
  });
};

export const createSpot = (spot, success) => {
  $.ajax({
    url: 'api/spots',
    method: 'post',
    data: {
      spot
    },
    success,
    error: () => console.log('error'),
  });
};

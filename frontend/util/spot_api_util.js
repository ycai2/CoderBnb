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

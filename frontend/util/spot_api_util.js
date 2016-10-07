export const fetchSpots = (success) => {
  $.ajax({
    url: 'api/spots',
    success,
    error: () => console.log('error'), 
  });
};

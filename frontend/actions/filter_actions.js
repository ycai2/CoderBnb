export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  location
});

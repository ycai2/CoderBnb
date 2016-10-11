export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';


export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateLocation = (coords, location) => ({
  type: UPDATE_LOCATION,
  coords,
  location
});

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
})

export const updateFilters = (filters) => ({
  type: UPDATE_FILTER,
  filters
})

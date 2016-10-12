export const REQUEST_SPOTS = 'REQUEST_SPOTS';
export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const CREATE_SPOT = 'CREATE_SPOT';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const REQUEST_SPOT = 'REQUEST_SPOT';

export const requestSpots = () => ({
  type: REQUEST_SPOTS
});

export const requestSpot = (id) => ({
  type: REQUEST_SPOT,
  id
});

export const receiveSpots = (data) => ({
  type: RECEIVE_SPOTS,
  spots: data.spots
});

export const createSpot = (spot) => ({
  type: CREATE_SPOT,
  spot
});

export const receiveSpot = (currentSpot) => ({
  type: RECEIVE_SPOT,
  currentSpot
});

export const REQUEST_SPOTS = 'REQUEST_SPOTS';
export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';

export const requestSpots = () => ({
  type: REQUEST_SPOTS
});

export const receiveSpots = (spots) => ({
  type: RECEIVE_SPOTS,
  spots
});

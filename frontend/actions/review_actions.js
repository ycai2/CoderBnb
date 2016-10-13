export const CREATE_REVIEW = 'CREATE_REVIEW';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';


export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const receiveReview = (currentReview) => ({
  type: RECEIVE_REVIEW,
  currentReview
});

export const requestReviews = () => ({
  type: REQUEST_REVIEWS,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

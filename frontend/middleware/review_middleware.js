import {
  CREATE_REVIEW,
} from '../actions/review_actions';
import { hashHistory } from 'react-router';
import { createReview } from '../util/review_api_util';

const ReviewMiddleware = ({getState, dispatch}) => next => action => {
  const reviewsSuccess = (data) => {
    dispatch(receiveReviews(data));
  };
  const reviewSuccess = (data) => {
    hashHistory.replace('/bookings');
    console.log(data);
  };
  switch (action.type) {
    case CREATE_REVIEW:
      createReview(action.review.bookingId, action.review, reviewSuccess);
      break;

    default:
      return next(action);
  }
}

export default ReviewMiddleware;

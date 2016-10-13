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
    console.log(data);
  };
  switch (action.type) {
    case CREATE_BOOKING:
      createReview(action.review, reviewSuccess);
      break;

    default:
      return next(action);
  }
}

export default ReviewMiddleware;

import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { requestBooking } from '../../actions/booking_actions';
import { createReview } from '../../actions/review_actions';
import { selectSpot } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const bookingId = parseInt(ownProps.params.bookingId);
  const booking = selectSpot(state.bookings, bookingId);
  return {
    bookingId,
    booking,
    currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBooking: id => dispatch(requestBooking(id)),
    createReview: newReview => dispatch(createReview(newReview)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingShow);

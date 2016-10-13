import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { requestBookings } from '../../actions/booking_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = ({ bookings }) => ({
  bookings: asArray(bookings),
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestBookings: () => dispatch(requestBookings()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);

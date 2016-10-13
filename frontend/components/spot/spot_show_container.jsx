import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { requestSpot } from '../../actions/spot_actions';
import { createBooking } from '../../actions/booking_actions';
import { selectSpot } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const spotId = parseInt(ownProps.params.spotId);
  const spot = selectSpot(state.spots, spotId);
  return {
    spotId,
    spot
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSpot: id => dispatch(requestSpot(id)),
    createBooking: newBooking => dispatch(createBooking(newBooking)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);

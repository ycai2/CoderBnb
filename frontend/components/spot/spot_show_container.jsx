import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { requestSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  const spotId = parseInt(ownProps.params.spotId);
  const spot = state.spots[spotId];
  return {
    spotId,
    spot
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSpot: id => dispatch(requestSpot(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);

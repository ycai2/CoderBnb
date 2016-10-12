import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { requestSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const spotId = parseInt(ownProps.params.spotId);
  return {
    spotId
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

import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = ({ spots }) => {
  return {
    spots
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = ({ spots }) => {
  return {
    spots
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

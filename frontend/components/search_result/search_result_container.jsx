import { connect } from 'react-redux';
import SearchResult from './search_result';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ spots }) => ({
  spots
});

const mapDispatchToProps = (dispatch) => {
  requestSpots: () => dispatch(requestSpots());
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);

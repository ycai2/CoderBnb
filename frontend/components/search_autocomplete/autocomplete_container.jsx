import { connect } from 'react-redux';
import Autocomplete from './autocomplete';
import { updateLocation } from '../../actions/filter_actions';

const mapStateToProps = ({  }) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (location) => dispatch(updateLocation(location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);

import { connect } from 'react-redux';
import Autocomplete from './autocomplete';
import { updateLocation } from '../../actions/filter_actions';

const mapStateToProps = ({  }) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (coords, location) => dispatch(updateLocation(coords, location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);

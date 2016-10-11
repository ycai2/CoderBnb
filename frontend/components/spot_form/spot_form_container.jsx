import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot } from '../../actions/spot_actions';

const mapStateToProps = ({  }) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
    createSpot: spot => dispatch(createSpot(spot)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);

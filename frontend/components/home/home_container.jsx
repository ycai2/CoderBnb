import { connect } from 'react-redux';
import { updateLocation, updateFilters } from '../../actions/filter_actions';
import Home from './home';

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (location) => dispatch(updateLocation(location)),
  updateFilter: (filters) => dispatch(updateFilter(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

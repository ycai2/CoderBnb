import { connect } from 'react-redux';
import { updateLocation, updateFilter, updateFilters } from '../../actions/filter_actions';
import Home from './home';

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (location) => dispatch(updateLocation(location)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilters: (filters) => dispatch(updateFilters(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

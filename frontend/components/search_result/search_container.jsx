import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';
import { updateBounds, updateFilters } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = ({ spots, filters }) => {
  return {
    spots: asArray(spots),
    filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  requestSpots: () => dispatch(requestSpots()),
  updateFilters: (filters) => dispatch(updateFilters(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

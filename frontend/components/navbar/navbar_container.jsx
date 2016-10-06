import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, modal }) => ({
  currentUser: session.currentUser,
  modalState: modal
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

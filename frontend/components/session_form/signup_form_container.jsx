import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user, closeModal) => dispatch(signup(user, closeModal)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

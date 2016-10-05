import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, closeModal) => dispatch(login(user, closeModal)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

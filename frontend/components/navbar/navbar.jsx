import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import modalStyle from '../session_form/session_form_css';
import AutocompleteContainer from '../search_autocomplete/autocomplete_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupIsOpen: false,
      loginIsOpen: false,
    };
    this.userOptions = this.userOptions.bind(this);
    this.openSignup = this.openSignup.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirectToSearch = this.redirectToSearch.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.body);
  }

  openSignup() {
    this.props.clearErrors();
    this.setState({
      signupIsOpen: true,
      loginIsOpen: false,
    });
  }

  openLogin() {
    this.props.clearErrors();
    this.setState({
      signupIsOpen: false,
      loginIsOpen: true,
    });
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({
      signupIsOpen: false,
      loginIsOpen: false
    });
  }

  userOptions() {
    return (
      <div>
        <ul className="navbar-list group">
          <li><Link to='/'>Trips</Link></li>
          <li className="user-label">
            <Link to='/'>{this.props.currentUser.firstName}</Link>
            <ul className="user-menu">
              <li><Link to='/'>Edit Profile</Link></li>
              <hr/>
              <li onClick={this.props.logout} className="logout">Log Out</li>
            </ul>
          </li>
        </ul>
        <Link to='/spots/new' className="new-spot-form">Become a Host</Link>
      </div>
    );
  }

  guestOptions() {
    return (
      <ul className="navbar-list group">
        <li onClick={this.openSignup}>Sign Up</li>
        <li onClick={this.openLogin}>Log In</li>
      </ul>
    )
  }

  redirectToSearch() {
    if (location.hash.split("?")[0] === "#/") {
      hashHistory.replace('/spots');
    }
  }


  render() {
    let options = (this.props.currentUser) ? this.userOptions() : this.guestOptions();
    return (
      <div>
        <nav className="navbar group">
          <h1 className="navbar-logo">
            <a href='/'>
              <i className="fa fa-file-code-o fa-3"></i>&nbsp;coderbnb
            </a>
          </h1>
          <div className="navbar-search">
            <i className="fa fa-search fa-3"></i>
            <AutocompleteContainer className="autocomplete-form" callback={this.redirectToSearch} />
          </div>
          {options}

        </nav>

        <Modal
          isOpen={this.state.signupIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
        >
          <SignupFormContainer closeModal={this.closeModal} openLogin={this.openLogin} />
        </Modal>

        <Modal
          isOpen={this.state.loginIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
        >
          <LoginFormContainer closeModal={this.closeModal} openSignup={this.openSignup} />
        </Modal>
      </div>
    );

  }
}

export default Navbar;

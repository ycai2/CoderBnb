import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import SignupFormContainer from '../session_form/signup_form_container';

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
  }

  componentWillMount() {
    Modal.setAppElement(document.body);
  }

  openSignup() {
    this.setState({
      signupIsOpen: true,
      loginIsOpen: false,
    });
  }

  openLogin() {
    this.setState({
      signupIsOpen: false,
      loginIsOpen: true,
    })
  }

  closeModal() {
    this.setState({
      signupIsOpen: false,
      loginIsOpen: false
    })
  }

  userOptions() {
    return (
      <ul className="navbar-list group">
        <li><Link to='/'>Trips</Link></li>
        <li><Link to='/'>Help</Link></li>
        <li className="user-label">
          <Link to='/'>{this.props.currentUser.firstName}</Link>
          <ul className="user-menu">
            <li><Link to='/'>Edit Profile</Link></li>
            <hr/>
            <li onClick={this.props.logout} className="logout">Log Out</li>
          </ul>
        </li>
      </ul>
    );
  }

  guestOptions() {
    return (
      <ul className="navbar-list group">
        <li><Link to='/'>Help</Link></li>
        <li onClick={this.openSignup}>Sign Up</li>
        <li onClick={this.openLogin}>Log In</li>
      </ul>
    )
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
          <i className="fa fa-search fa-3"></i>
          {options}
        </nav>
        <Modal
          isOpen={this.state.signupIsOpen}
          onRequestClose={this.closeModal}
        >
          <SignupFormContainer />
        </Modal>
      </div>
    );

  }
}

export default Navbar;

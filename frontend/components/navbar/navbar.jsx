import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.userOptions = this.userOptions.bind(this);
  }

  userOptions() {
    return (
      <ul className="navbar-list">
        <li>Trips</li>
        <li>Help</li>
        <li><Link to='/'>{this.props.currentUser.firstName}</Link></li>
        <li>
          <ul>
            <li>Edit Profile</li>
            <li onClick={logout}>Log Out</li>
          </ul>
        </li>
      </ul>
    );
  }

  guestOptions() {
    return (
      <ul className="navbar-list">
        <li><Link to='/'>Help</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Log In</Link></li>
      </ul>
    )
  }

  render() {
    let options = (this.props.currentUser) ? this.userOptions() : this.guestOptions();
    return (
      <nav className="navbar group">
        <h1 className="navbar-logo">
          <a href='/'>
            <i className="fa fa-file-code-o fa-3"></i>&nbsp;coderbnb
          </a>
        </h1>
        {options}
      </nav>
    );

  }
}

export default Navbar;

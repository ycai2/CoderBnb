import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.userOptions = this.userOptions.bind(this);
  }

  userOptions() {
    return (
      <div>
        <h1>Hello, {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  guestOptions() {
    return (
      <div>
        <h1>Please log in</h1>
        <Link to='/signup'>Sign Up</Link>
          &nbsp;|&nbsp;
        <Link to='/login'>Log In</Link>
      </div>
    )
  }

  render() {
    if (this.props.currentUser) {
      return this.userOptions();
    } else {
      return this.guestOptions();
    }
  }
}

export default Navbar;

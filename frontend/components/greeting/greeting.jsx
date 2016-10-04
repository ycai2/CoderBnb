import React from 'react';
import { Link } from 'react-router';

function Greeting({ currentUser, logout }) {
  if (currentUser) {
    return (
      <div>
        <h1>Hello, {currentUser.firstName} {currentUser.lastName}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please log in</h1>
        <Link to='/signup'>Sign Up</Link>
          &nbsp;|&nbsp;
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}

export default Greeting;

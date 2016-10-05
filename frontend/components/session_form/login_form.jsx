import React from 'react';
import { Link, hashHistory } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.guest = {
      email: "guest@email.com",
      password: "starwar",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user, this.props.closeModal);
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.login(this.guest, this.props.closeModal);
  }

  update(field) {
    return (e) => this.setState({
			[field]: e.currentTarget.value
		});
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>

        <form id="login-form">
          <div className="control-group">
            <input
              id="login-email"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email Address"
            />
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>

          <br />
          <div className="control-group">
            <input
              id="login-password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
          <br />
          <button onClick={this.handleSubmit}>Log in</button>
          <button onClick={this.guestLogin}>Guest</button>
        </form>

      </div>
    );

  }
}

export default LoginForm;

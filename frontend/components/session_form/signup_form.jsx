import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchModal = this.switchModal.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    this.props.signup(user, this.props.closeModal);
  }

  update(field) {
    return (e) => this.setState({
			[field]: e.currentTarget.value
		});
  }

  switchModal(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.openLogin();
  }

  render() {
    return (
      <div className="form-control">
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>

        <form id="signup-form">
          <div className="control-group">
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update('first_name')}
              placeholder="First name"
            />
            <i className="fa fa-user-secret" aria-hidden="true"></i>
          </div>

          <div className="control-group">
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update('last_name')}
              placeholder="Last name"
            />
            <i className="fa fa-user-secret" aria-hidden="true"></i>
          </div>

          <div className="control-group">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email address"
            />
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>

          <div className="control-group">
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>

          <button onClick={this.handleSubmit}>Sign up</button>
        </form>

        <hr />
        <div className="footer group">
          <div>Already an allnigh-co-ter?</div>
          <button onClick={this.switchModal}>Log in</button>
        </div>
      </div>
    );

  }
}

export default SignupForm;

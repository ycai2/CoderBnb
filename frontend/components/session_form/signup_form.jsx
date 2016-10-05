import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
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
    this.props.signup(user, this.props.closeModal);
  }

  update(field) {
    return (e) => this.setState({
			[field]: e.currentTarget.value
		});
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>

        <form>
          <label>
            First Name
            <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
          </label>

          <label>
            Last Name
            <input type="text" value={this.state.lastName} onChange={this.update('lastNane')}/>
          </label>

          <label>
            Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>

          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>

          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.closeModal}>Cancel</button>
        </form>
      </div>
    );

  }
}

export default SignupForm;

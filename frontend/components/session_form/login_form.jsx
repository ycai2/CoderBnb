import React from 'react';
import { Link, hashHistory } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    this.props.login(user);
  }

  update(field) {
    return (e) => this.setState({
			[field]: e.currentTarget.value
		});
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>

        <form>
          <label>
            Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>

          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>

          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );

  }
}

export default LoginForm;

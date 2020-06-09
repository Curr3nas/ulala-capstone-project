import React from 'react';
import TokenService from '../Services/token-service';

import './Login.css';

/**@class Login module handles making the basic auth token and storing
 * it in the browser as well as handing the registration process.
 */

class Login extends React.Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {
    signupError: null,
    loginError: null
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    
    const { user_name, password } = ev.target;
    
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    this.props.history.push(`/UserBuilds/${user_name.value}`);

    user_name.value ='';
    password.value = '';
    this.props.onLoginSuccess();
  };

  
  
render() {

  const locationState = this.props.location.state;

  return (
      <>
      <main className="login-page">
        <header>
          <h1>Login</h1>
        </header>

        <div className="login">
          <section>
            {locationState && !this.state.signupError && <p>{this.props.location.state.reason}</p>}
            <form onSubmit={ev => this.handleSubmitBasicAuth(ev)}>
              <label htmlFor="user_name">Username: </label>
              <input type="text" id="user_name" placeholder="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" placeholder="password" />
              <button>Submit</button>
            </form>
          </section>
        </div>
        </main>
      </>
    );
  };
};

export default Login;
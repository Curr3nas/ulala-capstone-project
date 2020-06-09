import React from 'react';
import TokenService from '../Services/token-service';
import BuildApiService from '../Services/build-api-service';

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

  handleSubmitRegistration = ev => {
    ev.preventDefault();

    const { userName, userPassword } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(userName.value, userPassword.value)
    );

    BuildApiService.postUser({user_name: userName.value,password: userPassword.value,})
      .catch(err => {
        if (err) {
          this.setState({
            signupError: err.error
          })
          return err
        };
      })
      .then(user => {
        userName.value='';
        userPassword.value='';
        if (!user.error) {
          this.props.history.push(`/UserBuilds/${user.user_name}`);
        };
      });
  };
  
render() {

  const locationState = this.props.location.state;

  return (
      <>
      <main className="login-page">
        <header>
          <h1>Sign-Up/Login</h1>
        </header>
        <div className="signup">
          <section>
            <h2>Sign-Up</h2>
            {this.state.signupError && <p>{this.state.signupError}</p>}
            <form onSubmit={ev => this.handleSubmitRegistration(ev)}>
              <label htmlFor="userName">Username: </label>
              <input type="text" name="username" id="userName" placeholder="username" />
              <label htmlFor="userPassword">Password: </label>
              <input type="password" name="password" id="userPassword" placeholder="password" />
              <button>Submit</button>
            </form>
          </section>
        </div>
        <div className="login">
          <section>
            <h2>Login</h2>
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
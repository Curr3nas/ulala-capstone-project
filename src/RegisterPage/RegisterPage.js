import React from 'react'
import TokenService from '../Services/token-service'
import BuildApiService from '../Services/build-api-service'

class RegisterPage extends React.Component {

  handleSubmitRegistration = ev => {
    ev.preventDefault();

    const { userName, userPassword } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(userName.value, userPassword.value)
    );

    BuildApiService.postUser({ user_name: userName.value, password: userPassword.value, })
      .catch(err => {
        if (err) {
          this.setState({
            signupError: err.error
          })
          return err
        };
      })
      .then(user => {
        userName.value = '';
        userPassword.value = '';
        if (!user.error) {
          this.props.history.push(`/UserBuilds/${user.user_name}`);
        };
      });
  };

  render() {
    return (
      <main className="signup-page">
        <header>
          <h1>Signup</h1>
        </header>
        <div className="signup">
          <section>
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
      </main>
    )
  }
}

export default RegisterPage;
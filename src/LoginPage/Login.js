import React from 'react'
import TokenService from '../Services/token-service'
import BuildApiService from '../Services/build-api-service'


class Login extends React.Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    
    const { user_name, password } = ev.target
    
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    this.props.history.push(`/UserBuilds/${user_name.value}`)

    user_name.value =''
    password.value = ''
    this.props.onLoginSuccess()

  }

  handleSubmitRegistration = ev => {
    ev.preventDefault() 

    const { userName, userPassword } = ev.target  

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(userName.value, userPassword.value)
    )

    BuildApiService.postUser({
      user_name: userName.value,
      password: userPassword.value,
    })
      .then(user=> {
        console.log(user);
        userName.value=''
        userPassword.value=''
        this.props.history.push(`/UserBuilds/${user.user_name}`)
      })

    userName.value =''
    userPassword.value =''
  }
  
render() {
  return (
      <>
        <header>
          <h1>Sign Up/Login</h1>
        </header>
        <div className="signup">
          <section>
            <h2>Sign Up</h2>
            <form onSubmit={ev => this.handleSubmitRegistration(ev)}>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="userName" placeholder="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="userPassword" placeholder="password" />
              <button>Submit</button>
            </form>
          </section>
        </div>
        <div className="login">
          <section>
            <h2>Login</h2>
            <form onSubmit={ev => this.handleSubmitBasicAuth(ev)}>
              <label htmlFor="user_name">Username: </label>
              <input type="text" id="user_name" placeholder="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" placeholder="password" />
              <input type="submit"></input>
            </form>
          </section>
        </div>
      </>
    )
  }
}

export default Login
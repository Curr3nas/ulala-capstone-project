import React from 'react'

class Login extends React.Component {


  
render() {
  return (
      <>
        <header>
          <h1>Sign Up/Login</h1>
        </header>
        <div className="signup">
          <section>
            <h2>Sign Up</h2>
            <form>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" placeholder="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" placeholder="password" />
              <button>Submit</button>
            </form>
          </section>
        </div>
        <div className="login">
          <section>
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="login-username" placeholder="username" />
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="login-password" placeholder="password" />
              <button>Submit</button>
            </form>
          </section>
        </div>
      </>
    )
  }
}

export default Login
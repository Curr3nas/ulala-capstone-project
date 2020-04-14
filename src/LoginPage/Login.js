import React from 'react'

function Login() {
  return (
    <>
      <header>
        <h1>Sign Up/Login</h1>
      </header>
      <div class="forms gray">
        <section>
          <h2>Sign Up</h2>
        <form>
          <label for="username">Username: </label>
          <input type="text" name="username" id="username" placeholder="username" />
          <label for="password">Password: </label>
          <input type="password" name="password" id="password" placeholder="password" />
        </form>
        <a href="/ulala-capstone-project/wireframes/saved-characters.html" class="form"><button>Submit</button></a>
        </section>
      </div>
      <div class="forms">
        <section>
          <h2>Login</h2>
          <form>
            <label for="username">Username: </label>
            <input type="text" name="username" id="username" placeholder="username" />
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="password" />
          </form>
          <a href="/ulala-capstone-project/wireframes/saved-characters.html" class="form"><button>Submit</button></a>
        </section>
      </div>
    </>
  )
}

export default Login
import React from 'react';
import { Route } from 'react-router-dom'
import StartPage from './StartPage/StartPage'
import RoleSelectPage from './RoleSelectPage/RoleSelectPage'
import Tank from './ClassSelectPages/Tank'
import Healer from './ClassSelectPages/Healer'
import Dps from './ClassSelectPages/Dps'
import ClassPage from './ClassPages/ClassPage'

class App extends React.Component {
  
  render() {
  return (
    <>
      <nav class="nav">
        <a href="/ulala-capstone-project/wireframes/start-page.html">Start Page</a>
        <a href="/ulala-capstone-project/wireframes/faq-page.html">FAQ</a>
        <a href="/ulala-capstone-project/wireframes/unlock-at-level.html">Unlock at Level</a>
        <a href="/ulala-capstone-project/wireframes/sign-up.html">Sign Up/Login</a>
      </nav>
      <Route exact path='/' component={StartPage} />
      <Route path='/RolePage' component={RoleSelectPage} />
      <Route path='/Tank' component={Tank} />
      <Route path='/Healer' component={Healer} />
      <Route path='/Dps' component={Dps}/>
      <Route path='/Assassin' component={ClassPage} />
    </>
  )
  }
}

export default App;
import React from 'react';
import { Route, Link } from 'react-router-dom'
import StartPage from './StartPage/StartPage'
import RoleSelectPage from './RoleSelectPage/RoleSelectPage'
import Tank from './ClassSelectPages/Tank'
import Healer from './ClassSelectPages/Healer'
import Dps from './ClassSelectPages/Dps'
import ClassPage from './ClassPages/ClassPage'
import Login from './LoginPage/Login'


class App extends React.Component {
  
  render() {
  return (
    <>
      <nav className="nav">
        <Link to='/'>Start Page</Link>
        <Link to='/Login'>Sign Up/Login</Link>
      </nav>
      <Route exact path='/' component={StartPage} />
      <Route path='/RolePage' component={RoleSelectPage} />
      <Route path='/Tank' component={Tank} />
      <Route path='/Healer' component={Healer} />
      <Route path='/Dps' component={Dps}/>
      <Route path={['/Assassin', '/Druid', '/Hunter', '/Mage', '/Gladiator', '/Shaman', '/Warlock', '/Warrior']} component={ClassPage} />
      <Route path='/Login' component={Login} />
    </>
  )
  }
}

export default App;
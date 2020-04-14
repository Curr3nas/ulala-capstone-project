import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css'

function StartPage() {

  return (
  <div className="start">
    <header>
      <h1>First Capstone Project</h1>
    </header>
    <div>
      <h2>Ulala: Idle Adventure Guide</h2>
      <p>
        This is my first capstone project. This app will walk you through the basics (and some not-so-basic) of the mobile game "Ulala: Idle Adventure"!
        To get started, please click the button below and you will be directed to the starting page of the app.  It will walk you through choosing a
        character and then show you all you need to know about that class to have a fun and successful time playing Ulala: Idle Adventure!  Enjoy!
      </p>
      <Link to='/RolePage'><button>Continue</button></Link>
    </div>
  </div>
  )
}

export default StartPage
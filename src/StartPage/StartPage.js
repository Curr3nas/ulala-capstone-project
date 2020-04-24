import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css'

function StartPage() {

  return (
  <div className="start">
    <header>
      <h1>Ulala: Idle Adventure Guide</h1>
    </header>
    <div className="content">
      <p>
        This is my first capstone project. This app will walk you through the basics (and some not-so-basic) of the mobile game "Ulala: Idle Adventure"!
        To get started, please click the button below and you will be directed to the starting page of the app.  It will walk you through choosing a
        character and then show you all you need to know about that class to have a fun and successful time playing Ulala: Idle Adventure!  Enjoy!
      </p>
      <Link to='/RolePage'><button>Continue</button></Link>
    </div>
    <footer>
      <p>
        All media content in this guide belongs to the makers of the game Ulala: Idle Adventure; X.D. Global and So Funny
      </p>
      <img src="../ulala-media/logos-and-backgrounds/logos.png" alt="X.D. Global and So Funny company logos."></img>
    </footer>
  </div>
  )
}

export default StartPage
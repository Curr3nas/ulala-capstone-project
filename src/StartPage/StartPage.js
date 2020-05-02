import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';

/**@StartPage Landing page for the app. gives a brief description, and has a link to the role select component */

function StartPage() {

  return (
  <div className="start">
    <div className="container" id="container">
    <header>
      <h1>Ulala: Idle Adventure Guide</h1>
    </header>
    <div className="content">
      <p>
        This is my first capstone project. This app will walk you through the basics (and some not-so-basic) of the mobile game "Ulala: Idle Adventure"!
        To get started, please click the button below and you will be directed to the starting page of the app.  It will walk you through choosing a
        character and then show you all you need to know about that class to have a fun and successful time playing Ulala: Idle Adventure!  Enjoy!
      </p>
      <br></br>
      <p>
        If you would like to use the User features, without creating a login.  Please use these demo credentials.  Just be aware that others may also be
        using the login.
      </p>
      <br></br>
      <p>Username: demoUser</p>
      <p>Password: demoPassw0rd</p>
      <Link to='/RolePage'><button>Continue</button></Link>
    </div>
    </div>
    <footer>
      <p>
        All media content in this guide belongs to the makers of the game Ulala: Idle Adventure; X.D. Global and So Funny
      </p>
      <img src="../ulala-media/logos-and-backgrounds/logos.png" alt="X.D. Global and So Funny company logos."></img>
    </footer>
  </div>
  );
};

export default StartPage;
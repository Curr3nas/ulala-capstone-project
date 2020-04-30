import React from 'react';
import { Link } from 'react-router-dom';
import Warrior from '../ulala-media/class-images/warrior.png';
import Healer from '../ulala-media/class-images/shaman.png';
import Dps from '../ulala-media/class-images/assassin.png';
import './RoleSelectPage.css';

function RoleSelectPage() {
  return (
    <>
      <main className="choices">
        <header>
          <h1>Choose Your Role</h1>
        </header>
        <div className="sections">
          <section className="tank">
            <h2>Tank</h2>
            <Link to='/Tank'><img src={Warrior} alt='tank class' className='role'></img></Link>
            <p>The tank is the "meatshield".  They take the brunt of the damage, and do everything possible to protect their team.</p>
          </section>
          <section className="healer">
            <h2>Healer</h2>
            <Link to='/Healer'><img src={Healer} alt='healer class' className='role'></img></Link>
            <p>The healer is responsible for keeping their team members alive.  They do this by casting spells that restore health to their team.</p>
          </section>
          <section className="dps">
            <h2>DPS</h2>
            <Link to='/Dps'><img src={Dps} alt='dps class' className='role'></img></Link>
            <p>DPS stands for Damage Per Second. These are the damage dealers of the team. They are responsible for killing the opponent!</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default RoleSelectPage;
import React from 'react'
import { Link } from 'react-router-dom'
import assassin from '../ulala-media/class-images/assassin.png'
import hunter from '../ulala-media/class-images/hunter.png'
import mage from '../ulala-media/class-images/mage.png'
import warlock from '../ulala-media/class-images/warlock.png'

import './ClassSelect.css'

function Dps() {
  return (
    <>
      <main className="choices">
        <header>
          <h1>Choose Your Class</h1>
        </header>
        <div className="sections">
          <section>
            <h2>Assassin</h2>
            <Link to='/Assassin'><img src={assassin} alt='assassin class' className='image'></img></Link>
            <p>Best known for their strong build and vigorous moves, Assassins can travel back and forth on the battlefield agilely. Armed with two daggers, they aim for the enemy's weak point and strike fiercely.</p>
          </section>
          <section>
            <h2>Hunter</h2>
            <Link to='/Hunter'><img src={hunter} alt='hunter class' className='image'></img></Link>
            <p>Hunters use bow and arrows as their weapon of choice. They know to keep distance from their enemy so they can fire at the enemy's weak point from their own safety.</p>
          </section>
          <section>
            <h2>Mage</h2>
            <Link to='/Mage'><img src={mage} alt='mage class' className='image'></img></Link>
            <p>A mage is highly talented with the ability to use the power of arcane at will and trick the enemy with ease.</p>
          </section>
          <section>
            <h2>Warlock</h2>
            <Link to='/Warlock'><img src={warlock} alt='warlock class' className='image'></img></Link>
            <p>Warlocks can control the fire element freely and use the force of flame to surround the enemy with a deluge of fire.</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Dps
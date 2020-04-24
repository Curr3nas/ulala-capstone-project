import React from 'react'
import { Link } from 'react-router-dom'
import Warrior from '../ulala-media/class-images/warrior.png'
import gladiator from '../ulala-media/class-images/gladiator.png'
import './ClassSelect.css'

function Tank() {
  return (
    <>
      <main className="choices">
        <header>
          <h1>Choose Your Class</h1>
        </header>
        <div className="sections">
          <section className="warrior">
            <h2>Warrior</h2>
            <Link to='/Warrior'><img src={Warrior} alt='warrior class' className='image'></img></Link>
            <p>Armed with a huge battle hammer, Warriors can deal fatal blows to the enemy in front of them.</p>
          </section>
          <section className="gladiator">
            <h2>Gladiator</h2>
            <Link to='/Gladiator'><img src={gladiator} alt='gladiator class' className='image'></img></Link>
            <p>Armed with two blades, Gladiators fight on the front lines. The most trustworthy members in a team, they always lead the charge in combat.</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Tank
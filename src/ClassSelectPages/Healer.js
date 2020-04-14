import React from 'react'
import { Link } from 'react-router-dom'
import shaman from '../ulala-media/class-images/shaman.png'
import druid from '../ulala-media/class-images/druid.png'
import './ClassSelect.css'

function Healer() {
  return (
    <>
      <main>
        <header>
          <h1>Choose Your Class</h1>
        </header>
        <div className="Healer">
          <section>
            <Link to='/Shaman'><img src={shaman} alt='shaman class' className='image'></img></Link>
            <h2>Shaman</h2>
            <p>Shamans are doubtlessly the most popular ones in a team. With mighty cohesive force and a Heal power, they are also able to summon different totems.</p>
          </section>
          <section className="Druid">
            <Link to='/Druid'><img src={druid} alt='druid class' className='image'></img></Link>
            <h2>Druid</h2>
            <p>Druids are messengers of nature, specialized in shapshifting and the use of natural forces in curing teammates.</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Healer
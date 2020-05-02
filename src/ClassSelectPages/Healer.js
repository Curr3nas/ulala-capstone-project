import React from 'react';
import { Link } from 'react-router-dom';
import shaman from '../ulala-media/class-images/shaman.png';
import druid from '../ulala-media/class-images/druid.png';
import './ClassSelect.css';

/**@Healer Component that displays the available classes per the Healer role, selected on previous component. Each image provides a link to the respective Class Page */

function Healer() {
  return (
    <>
      <main className="choices">
        <header>
          <h1>Choose Your Class</h1>
        </header>
        <div className="sections">
          <section>
            <h2>Shaman</h2>
            <Link to='/Shaman'><img src={shaman} alt='shaman class' className='image'></img></Link>
            <p>Shamans are doubtlessly the most popular ones in a team. With mighty cohesive force and a Heal power, they are also able to summon different totems.</p>
          </section>
          <section className="Druid">
            <h2>Druid</h2>
            <Link to='/Druid'><img src={druid} alt='druid class' className='image'></img></Link>
            <p>Druids are messengers of nature, specialized in shapshifting and the use of natural forces in curing teammates.</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Healer;
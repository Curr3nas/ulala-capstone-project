import React from 'react'
import { clatters } from '../Clatters/Clatters'

class ClatterList extends React.Component {
  render () {

  let tankClatters = clatters.filter(clatter => clatter.type === 'Fluff' || clatter.region === 'Desert')
  let healerClatters = clatters.filter(clatter => clatter.type === 'Solid Bone')
  let dpsClatters = clatters.filter(clatter => clatter.type === 'Giant Jaw' || clatter.type === 'Flying Wings')

    let dps = ['Warlock', 'Assassin', 'Mage', 'Hunter']
    let healer = ['Shaman', 'Druid']
    let tank = ['Gladiator', 'Warrior']
    
  

  if (dps.includes(this.props.currentName)) {
    return (
      <>
      <p>Pick any combination of these cards to get 6 Giant Jaw and 3 Flying Wings</p>
        {dpsClatters.map((clatter, idx) => {
          let source = `../../${clatter.img}`
            return (
              <li key={idx}>
                <h3>{clatter.name}</h3>
                <img src={source} alt={clatter.name}></img>
              </li>
              
            )
            })}
      </>
    )
    } else if (healer.includes(this.props.currentName)) {
      return (
        <>
        <p>Collect any combination of these cards to get the 6 piece Solid Bone set bonus. The other cards should just be the best attributes you can get</p>
          {healerClatters.map((clatter, idx) => {
            let source = `../../${clatter.img}`
              return (
                <li key={idx}>
                  <h3>{clatter.name}</h3>
                  <img src={source} alt={clatter.name}></img>
                </li>
              )
            }
          )}
        </>
      )
    } else if (tank.includes(this.props.currentName)){
      return (
        <>
        <p>Pick any combination of these cards you can get to earn the 3 piece bonus for both the Fluff set and the Desert set. The other 3 cards are up to you, to get the best stats you can get for what you need.</p>
          {tankClatters.map((clatter, idx) => {
            let source = `../../${clatter.img}`
            return (
              <li key={idx}>
                <h3>{clatter.name}</h3>
                <img src={source} alt={clatter.name}></img>
              </li>
            )}
          )}
        </>
      )
    } else {
      return (
        <>
          {clatters.map((clatter, idx) => {
            if (clatter.bonus) {
              return (
                <li key={idx}>
                  <h3>{clatter.name}</h3>
                  <img src={clatter.img} alt={clatter.name}></img>
                  <p>Region: {clatter.region}</p>
                  <p>Type: {clatter.type}</p>
                  <p>{clatter.oneStar}</p>
                  <p>{clatter.twoStar}</p> 
                  <p>{clatter.threeStar}</p>
                  <p>Bonus:{clatter.bonus}</p>
                </li>
              )
            } else {
              return (
                <li key={idx}>
                  <h3>{clatter.name}</h3>
                  <img src={clatter.img} alt={clatter.name}></img>
                  <p>Region: {clatter.region}</p>
                  <p>Type: {clatter.type}</p>
                  <p>{clatter.oneStar}</p>
                  <p>{clatter.twoStar}</p> 
                  <p>{clatter.threeStar}</p>
                </li>
              )}
          })}
        </>
      )
    }
      
    }
  }

export default ClatterList
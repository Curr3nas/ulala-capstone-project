import React from 'react'
import { clatters } from '../Clatters/Clatters'

class ClatterList extends React.Component {
  render () {

  let tankClatters = clatters.filter(clatter => clatter.type === 'Fluff' || clatter.region === 'Desert')
  let healerClatters = clatters.filter(clatter => clatter.type === 'Solid Bone')
  let dpsClatters = clatters.filter(clatter => clatter.type === 'Giant Jaw' || clatter.type === 'Flying Wings')

  if (this.props.recClatters && this.props.currentName.includes('Warlock', 'Assassin', 'Mage', 'Hunter')) {
    return (
      <>
        {dpsClatters.map(clatter => {
          if (clatter.bonus) {
            return (
              <li>
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
          } else {return (
            <li>
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
    } else if (this.props.recClatters && this.props.currentName.includes('Shaman', 'Druid')) {
      return (
        <>
          {healerClatters.map(clatter => {
            if (clatter.bonus) {
              return (
                <li>
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
            } else {return (
              <li>
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
    } else if (this.props.recClatters && this.props.currentName.includes('Warrior', 'Gladiator')){
      return (
        <>
          {tankClatters.map(clatter => {
            if (clatter.bonus) {
              return (
                <li>
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
            } else {return (
              <li>
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
    } else {
      return (
        <>
          {clatters.map(clatter => {
            if (clatter.bonus) {
              return (
                <li>
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
            } else {return (
              <li>
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
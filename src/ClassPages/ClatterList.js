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

  if (this.props.recClatters && dps.includes(this.props.currentName)) {
    return (
      <>
        {dpsClatters.map((clatter, idx) => {
          if (clatter.bonus) {
            return (
              <li key={idx}>
                <h3>{clatter.name}</h3>
                <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
                <p>Region: {clatter.region}</p>
                <p>Type: {clatter.type}</p>
                <p>{clatter.oneStar}</p>
                <p>{clatter.twoStar}</p> 
                <p>{clatter.threeStar}</p>
                <p>Bonus:{clatter.bonus}</p>
              </li>
            )
          } else {return (
            <li key={idx}>
              <h3>{clatter.name}</h3>
              <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
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
    } else if (this.props.recClatters && healer.includes(this.props.currentName)) {
      return (
        <>
          {healerClatters.map((clatter, idx) => {
            if (clatter.bonus) {
              return (
                <li key={idx}>
                  <h3>{clatter.name}</h3>
                  <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
                  <p>Region: {clatter.region}</p>
                  <p>Type: {clatter.type}</p>
                  <p>{clatter.oneStar}</p>
                  <p>{clatter.twoStar}</p> 
                  <p>{clatter.threeStar}</p>
                  <p>Bonus:{clatter.bonus}</p>
                </li>
              )
            } else {return (
              <li key={idx}>
                <h3>{clatter.name}</h3>
                <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
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
    } else if (this.props.recClatters && tank.includes(this.props.currentName)){
      return (
        <>
          {tankClatters.map((clatter, idx) => {
            if (clatter.bonus) {
              return (
                <li key={idx}>
                  <h3>{clatter.name}</h3>
                  <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
                  <p>Region: {clatter.region}</p>
                  <p>Type: {clatter.type}</p>
                  <p>{clatter.oneStar}</p>
                  <p>{clatter.twoStar}</p> 
                  <p>{clatter.threeStar}</p>
                  <p>Bonus:{clatter.bonus}</p>
                </li>
              )
            } else {return (
              <li key={idx}>
                <h3>{clatter.name}</h3>
                <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
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
          {clatters.map((clatter, idx) => {
            if (clatter.bonus) {
              return (
                <li key={idx}>
                  <h3>{clatter.name}</h3>
                  <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
                  <p>Region: {clatter.region}</p>
                  <p>Type: {clatter.type}</p>
                  <p>{clatter.oneStar}</p>
                  <p>{clatter.twoStar}</p> 
                  <p>{clatter.threeStar}</p>
                  <p>Bonus:{clatter.bonus}</p>
                </li>
              )
            } else {return (
              <li key={idx}>
                <h3>{clatter.name}</h3>
                <img src={clatter.img} alt={clatter.name} className="clatter-img"></img>
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
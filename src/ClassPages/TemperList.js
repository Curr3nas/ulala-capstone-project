import React from 'react'
import { tempers } from '../Tempers/Tempers'

/**@class TemperList component filters the tempers based off of the selected classes role. 
 * then displays either the full list or the filtered list depending on if the user has clicked the "recommended only" button */

class TemperList extends React.Component {
  render () {
    let recTempers
    if (this.props.recTempers) {
      recTempers = tempers.filter(temper => {
        return temper.recommended && temper.recommended.includes(this.props.currentName)
      })
      
      return (
        <>
          {recTempers.map((temper, idx) => {
            return (
              <li key={idx}>
                <h3>{temper.name}</h3>
                <p>{temper.desc}</p>
              </li>
            )
          })}
          </>
      )
    } else {
      return (
      <>
        {tempers.map((temper, idx) => {
          return (
            <li key={idx}>
                <h3>{temper.name}</h3>
                <p>{temper.desc}</p>
              </li>
          )
        })}
      </>
      )}
  }
}

export default TemperList
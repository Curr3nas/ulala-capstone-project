import React from 'react'
import { tempers } from '../Tempers/Tempers'

class TemperList extends React.Component {
  render () {
    let recTempers
    if (this.props.recTempers) {
      recTempers = tempers.filter(temper => {
        return temper.recommended && temper.recommended.includes(this.props.currentName)
      })
      
      return (
        <>
          {recTempers.map(temper => {
            return (
              <>
              <dt>{temper.name}</dt>
              <dd>{temper.desc}</dd>
              </>
            )
          })}
          </>
      )
    } else {
      return (
      <>
        {tempers.map(temper => {
          return (
            <>
            <dt>{temper.name}</dt>
            <dd>{temper.desc}</dd>
            </>
          )
        })}
      </>
      )}
  }
}

export default TemperList
import React from 'react';
import { tempers } from '../Tempers/Tempers';

class BuildTemperList extends React.Component {
  render () {
    let recTempers = tempers.filter(temper => {
        return temper.recommended && temper.recommended.includes(this.props.currentName)
      })
      
      return (
        <>
          {recTempers.map((temper, idx) => {
            return (
              <li key={idx}>
                <h4>{temper.name}</h4>
                <p>{temper.desc}</p>
              </li>
            )
          })}
          </>
      )
    }
  }

export default BuildTemperList;
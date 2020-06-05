import React from 'react';
import { tempers } from '../Tempers/Tempers';

/**@class BuildTemperList provides the "recommended tempers" list for use in the UserBuild page */

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
                <h3>{temper.name}</h3>
                <p>{temper.desc}</p>
              </li>
            )
          })}
          </>
      )
    }
  }

export default BuildTemperList;
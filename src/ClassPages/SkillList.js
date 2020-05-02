import React from 'react'

/**@class SkillList component filters the skills into 3 recommended areas, single target Hunt, AOE(area of effect) damage, or AFK trash. 
 * then displays either the full list of skills or the filtered list depending on if the user has clicked the "recommended only" button */

class SkillList extends React.Component {

  render() {
    let huntSkills
    let afkSkills
    let aoeSkills
    if (this.props.recSkills) {
      huntSkills = this.props.currentSkills.filter(skill => { return skill.recommended && skill.recommended.includes('Hunt') })
      afkSkills = this.props.currentSkills.filter(skill => { return skill.recommended && skill.recommended.includes('AFK') })
      aoeSkills = this.props.currentSkills.filter(skill => { return skill.recommended && skill.recommended.includes('AOE') })
      return (
        <>
          <h2>Hunt Skills</h2>
          <ul>
          {huntSkills.map((skill, idx) => {
            if (skill.type) {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.description}</p>
                </li>
              )
            }
          })}
          </ul>
          <h2>AFK Skills</h2>
          <ul>
          {afkSkills.map((skill, idx) => {
            if (skill.type) {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.description}</p>
                </li>
              )
            }
          })}
          </ul>
          <h2>AOE Skills</h2>
          <ul>
          {aoeSkills.map((skill, idx) => {
            if (skill.type) {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.description}</p>
                </li>
              )
            }
          })}
          </ul>
        </>
      )
    } else {
      return (
        <>
        <ul>
          {this.props.currentSkills.map((skill, idx) => {
            if (skill.type) {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else {
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.description}</p>
                </li>
              )
            }
          })
          }
          </ul>
        </>
      )
    }
  }
}

export default SkillList
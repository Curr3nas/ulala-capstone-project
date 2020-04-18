import React from 'react'

class SkillList extends React.Component {

  render() {
    let huntSkills
    let afkSkills
    let aoeSkills
    if (this.props.recSkills) {
      huntSkills = this.props.currentSkills.filter(skill => skill.recommended === 'Hunt')
      afkSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('AFK')})
      aoeSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('AOE')})
      return (
        <>
          <h2>Hunt Skills</h2>
          {huntSkills.map((skill, idx) => {        
            if (skill.type) {
              return (
                <li key={skill[idx]}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else { 
                return (
                  <li id={skill[idx]}>
                    <h3>{skill.name}</h3>
                    <img src={skill.img} alt={skill.name}></img>
                    <p>{skill.rarity}</p>
                    <p>{skill.description}</p>
                  </li>
                )
              }
          })}
          <h2>AFK Skills</h2>
          {afkSkills.map((skill, idx) => {        
            if (skill.type) {
              return (
                <li key={skill[idx]}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else { 
                return (
                  <li id={skill[idx]}>
                    <h3>{skill.name}</h3>
                    <img src={skill.img} alt={skill.name}></img>
                    <p>{skill.rarity}</p>
                    <p>{skill.description}</p>
                  </li>
                )
              }
          })}
          <h2>AOE Skills</h2>
          {aoeSkills.map((skill, idx) => {        
            if (skill.type) {
              return (
                <li key={skill[idx]}>
                  <h3>{skill.name}</h3>
                  <img src={skill.img} alt={skill.name}></img>
                  <p>{skill.rarity}</p>
                  <p>{skill.type}</p>
                  <p>{skill.description}</p>
                </li>
              )
            } else { 
                return (
                  <li id={skill[idx]}>
                    <h3>{skill.name}</h3>
                    <img src={skill.img} alt={skill.name}></img>
                    <p>{skill.rarity}</p>
                    <p>{skill.description}</p>
                  </li>
                )
              }
          })}
        </>
      )
    } else {
      return (
        <>
          {this.props.currentSkills.map((skill, idx) => {
                    if (skill.type) {
                              return (
                                <li key={skill[idx]}>
                                  <h3>{skill.name}</h3>
                                  <img src={skill.img} alt={skill.name}></img>
                                  <p>{skill.rarity}</p>
                                  <p>{skill.type}</p>
                                  <p>{skill.description}</p>
                                </li>
                              )
                          } else { 
                            return (
                              <li id={skill[idx]}>
                                <h3>{skill.name}</h3>
                                <img src={skill.img} alt={skill.name}></img>
                                <p>{skill.rarity}</p>
                                <p>{skill.description}</p>
                              </li>
                            )
                          }
                  })
                }
        </>
      )
    }
  }
}

export default SkillList
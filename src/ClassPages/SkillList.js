import React from 'react'

class SkillList extends React.Component {

  render() {
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

export default SkillList
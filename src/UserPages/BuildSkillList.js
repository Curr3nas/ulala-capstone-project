import React from 'react'

/**@class BuildSkillList provides the "recommended Skills" list for use in the UserBuild page */


class BuildSkillList extends React.Component {

  render() {
      let huntSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('Hunt')})
      let afkSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('AFK')})
      let aoeSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('AOE')})

      return (
        <>
          <h2>Hunt Skills</h2>
          <ul>
          {huntSkills.map((skill, idx) => {
            let source = `../../${skill.img}`
            return (
              <li key={idx}>
                <h3>{skill.name}</h3>
                <img src={source} alt={skill.name}></img>
              </li>
              )
            })}
            </ul>
          <h2>AFK Skills</h2>
          <ul>
          {afkSkills.map((skill, idx) => {        
            let source=`../../${skill.img}`
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={source} alt={skill.name}></img>
                </li>
              )
          })}
          </ul>
          <h2>AOE Skills</h2>
          <ul>
          {aoeSkills.map((skill, idx) => {        
            let source=`../../${skill.img}`
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={source} alt={skill.name}></img>
                </li>
              )
          })}
          </ul>
        </>
      )
    }
}

export default BuildSkillList
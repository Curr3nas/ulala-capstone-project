import React from 'react'

class BuildSkillList extends React.Component {

  render() {
      let huntSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('Hunt')})
      let afkSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('AFK')})
      let aoeSkills = this.props.currentSkills.filter(skill => {return skill.recommended && skill.recommended.includes('AOE')})

      return (
        <>
          <h2>Hunt Skills</h2>
          {huntSkills.map((skill, idx) => {
            let source = `../../${skill.img}`
            return (
              <li key={idx}>
                <h3>{skill.name}</h3>
                <img src={source} alt={skill.name}></img>
              </li>
              )
            })}
          <h2>AFK Skills</h2>
          {afkSkills.map((skill, idx) => {        
            let source=`../../${skill.img}`
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={source} alt={skill.name}></img>
                </li>
              )
          })}
          <h2>AOE Skills</h2>
          {aoeSkills.map((skill, idx) => {        
            let source=`../../${skill.img}`
              return (
                <li key={idx}>
                  <h3>{skill.name}</h3>
                  <img src={source} alt={skill.name}></img>
                </li>
              )
          })}
        </>
      )
    }
}

export default BuildSkillList
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import { assassinSkills, druidSkills, gladSkills, hunterSkills, mageSkills, shamanSkills, warlockSkills, warriorSkills } from '../skills/skills'
import SkillList from './SkillList'
import { clatters } from '../Clatters/Clatters'
import { assassinAttributes, druidAttributes, gladAttributes, hunterAttributes, mageAttributes, shamanAttributes, warlockAttributes, warriorAttributes } from '../Attributes/ClassAttributes'

class ClassPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  
  state = {
    skills: [],
    name: '',
    attributes: []
  }

  componentDidMount = () => {
    if(this.props.location.pathname === "/Assassin") {
      this.setState({
        skills: assassinSkills,
        name: "Assassin",
        attributes: assassinAttributes
      })
    }

    if(this.props.location.pathname === "/Druid") {
      this.setState({
        skills: druidSkills,
        name: "Druid",
        attributes: druidAttributes
      })
    }

    if(this.props.location.pathname === "/Hunter") {
      this.setState({
        skills: hunterSkills,
        name: "Hunter",
        attributes: hunterAttributes
      })
    }

    if(this.props.location.pathname === "/Shaman") {
      this.setState({
        skills: shamanSkills,
        name: "Shaman",
        attributes: shamanAttributes
      })
    }

    if(this.props.location.pathname === "/Gladiator") {
      this.setState({
        skills: gladSkills,
        name: "Gladiator",
        attributes: gladAttributes
      })
    }

    if(this.props.location.pathname === "/Warlock") {
      this.setState({
        skills: warlockSkills,
        name: "Warlock",
        attributes: warlockAttributes
      })
    }

    if(this.props.location.pathname === "/Warrior") {
      this.setState({
        skills: warriorSkills,
        name: "Warrior",
        attributes: warriorAttributes
      })
    }

    if(this.props.location.pathname === "/Mage") {
      this.setState({
        skills: mageSkills,
        name: "Mage",
        attributes: mageAttributes
      })
    }
  } 

  render() {
    let currentSkills = this.state.skills
    let currentName = this.state.name
    let currentAttributes = this.state.attributes
    return (
      <>
        <div className="class">
          <h1>{currentName}</h1>
          <section>
            <h2>Skills</h2>
            <button className="recommended">Recommended Only</button>
            <ul>
              <SkillList currentSkills={currentSkills}/>
            </ul>
          </section>
          <section className="attributes">
            <h2>{currentName} Attributes</h2>
            <ul>
              {currentAttributes.map(attribute => {
                return (
                  <li>
                    <h3>{attribute.name}</h3>
                    <p>{attribute.desc}</p>
                    <ul>
                      <li>{attribute.statOne}</li>
                      <li>{attribute.statTwo}</li>
                      <li>{attribute.statThree}</li>
                    </ul>
                    <p>{attribute.allocation}</p>
                  </li>
                )
              })}
            </ul>
          </section>
          <section className="wish">
            <h2>Wishing Well</h2>
            <p>You earn coins to throw into the wishing well by completing all five daily quests that are provided to you each day. It can take as long as 34 days to fill you wish meter enough to earn the legendary version of the skill you are wishing for. It usually will not take this long.</p>
            <p>You should prioritize these skills from the wishing well. If you already have a legendary version of the skill, move on to the next skill in the list. Once you have obtained the legendary version of all these skills, feel free to prioritize the skills in any order you wish.</p>
            <ol>
              <li>
                <p>skill name</p>
                <p>[placeholder for skill image. legendary]</p>
              </li>
              <li>
                <p>skill name</p>
                <p>[placeholder for skill image. legendary]</p>
              </li>
              <li>
                <p>skill name</p>
                <p>[placeholder for skill image. legendary]</p>
              </li>
            </ol>
          </section>
          <section className="temper">
            <h2>{currentName} Tempers</h2>
            <button className="recommendedTemper">Recommended Tempers</button>
            <dl>
              <dt>temper name</dt>
              <dd>temper description</dd>
              <dt>temper name</dt>
              <dd>temper description</dd>
              <dt>temper name</dt>
              <dd>temper description</dd>
            </dl>  
          </section>
          <section className="clatter">
            <h2>Clatter Cards</h2>
            <button className="recommendedClatter">Recommended Cards</button>
            <ul>
              {clatters.map(clatter => {
                if (clatter.bonus) {
                  return (
                    <li>
                      <h3>{clatter.name}</h3>
                      <img src={clatter.img} alt={clatter.name}></img>
                      <p>Region: {clatter.region}</p>
                      <p>Type: {clatter.type}</p>
                      <p>{clatter.oneStar}</p>
                      <p>{clatter.twoStar}</p> 
                      <p>{clatter.threeStar}</p>
                      <p>Bonus:{clatter.bonus}</p>
                    </li>
                  )
                } else {return (
                  <li>
                    <h3>{clatter.name}</h3>
                    <img src={clatter.img} alt={clatter.name}></img>
                    <p>Region: {clatter.region}</p>
                    <p>Type: {clatter.type}</p>
                    <p>{clatter.oneStar}</p>
                    <p>{clatter.twoStar}</p> 
                    <p>{clatter.threeStar}</p>
                  </li>
                )}
              })}
            </ul>
          </section>
          <Link to='/Login'><button>Save Build</button></Link>
        </div>
      </>
    )
  }
}

export default ClassPage
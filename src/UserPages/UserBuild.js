import React from 'react'
import { Link } from 'react-router-dom'
import { assassinSkills, druidSkills, gladSkills, hunterSkills, mageSkills, shamanSkills, warlockSkills, warriorSkills } from '../skills/skills'
import { assassinAttributes, druidAttributes, gladAttributes, hunterAttributes, mageAttributes, shamanAttributes, warlockAttributes, warriorAttributes } from '../Attributes/ClassAttributes'
import TemperList from '../ClassPages/TemperList'
import BuildSkillList from './BuildSkillList'
import ClatterList from '../ClassPages/ClatterList'

class UserBuild extends React.Component {

  state = {
    skills: [],
    name: "",
    attributes: []
  }

  componentDidMount = () => {
    if(this.props.match.params.build === "Assassin") {
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
          <section className="skill">
            <h2>Skills</h2>
            <ul>
              <BuildSkillList currentSkills={currentSkills} recSkills={this.state.recSkills} currentName={currentName}/>
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
            <button className="recommendedTemper" onClick={e => this.handleRecTempersClicked(e)}>Recommended Tempers</button>
            <dl>
              <TemperList currentName={currentName} recTempers={this.state.recTempers}/>
            </dl>  
          </section>
          <section className="clatter">
            <h2>Clatter Cards</h2>
            <p>Clatter cards are special "playing cards" that you collect that add boosts to your stats. The raw stat boosts provided
              by the cards themselves is only marginally important. The real key to clatter cards are the "bond" bonuses that can be obtained.
              There are two types of bond bonuses: Region and Type. For example, the 'Heavy Horn' type, and the 'Coast' region. Clicking on the
              'Recommended Cards' button below, will filter out the cards you want to look for based off of the recommended bonuses for your
              class.
            </p>
            <button className="recommendedClatter" onClick={e => this.handleRecClattersClicked(e)}>Recommended Cards</button>
            <ul>
              <ClatterList currentName={currentName} recClatters={this.state.recClatters}/>
            </ul>
          </section>
          <Link to='/Login'><button>Save Build</button></Link>
        </div>
      </>
    )
  }
}

export default UserBuild
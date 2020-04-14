/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import { assassinSkills } from '../skills/assassin-skills'
import { druidSkills } from '../skills/druid-skills'
import { hunterSkills } from '../skills/hunter-skills'
import { gladSkills } from '../skills/glad-skills'
import { shamanSkills } from '../skills/shaman-skills'
import { warriorSkills } from '../skills/warrior-skills'
import { mageSkills } from '../skills/mage-skills'
import { warlockSkills } from '../skills/warlock-skills'


class ClassPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  
  state = {
    selected: [],
    name: ''
  }

  componentDidMount = () => {
    if(this.props.location.pathname === "/Assassin") {
      this.setState({
        selected: assassinSkills,
        name: "Assassin"
      })
    }

    if(this.props.location.pathname === "/Druid") {
      this.setState({
        selected: druidSkills,
        name: "Druid"
      })
    }

    if(this.props.location.pathname === "/Hunter") {
      this.setState({
        selected: hunterSkills,
        name: "Hunter"
      })
    }

    if(this.props.location.pathname === "/Shaman") {
      this.setState({
        selected: shamanSkills,
        name: "Shaman"
      })
    }

    if(this.props.location.pathname === "/Gladiator") {
      this.setState({
        selected: gladSkills,
        name: "Gladiator"
      })
    }

    if(this.props.location.pathname === "/Warlock") {
      this.setState({
        selected: warlockSkills,
        name: "Warlock"
      })
    }

    if(this.props.location.pathname === "/Warrior") {
      this.setState({
        selected: warriorSkills,
        name: "Warrior"
      })
    }

    if(this.props.location.pathname === "/Mage") {
      this.setState({
        selected: mageSkills,
        name: "Mage"
      })
    }
  } 

  render() {
    let currentClass = this.state.selected
    let currentName = this.state.name
    console.log(currentClass)
    return (
      <>
        <div className="class">
          <h1>{currentName}</h1>
          <section>
            <h2>Skills</h2>
            <button className="legendary">Legendary Only</button>
            <button className="recommended">Recommended Only</button>
            <ul>
              {currentClass.map((skill, idx) => {
                if (skill.type) {
                          return (
                            <li key={skill[idx]}>
                              <h3>{skill.name}</h3>
                              <img src={skill.img} alt='skill photo'></img>
                              <p>{skill.rarity}</p>
                              <p>{skill.type}</p>
                              <p>{skill.description}</p>
                            </li>
                          )
                      } else { 
                        return (
                          <li id={skill[idx]}>
                            <h3>{skill.name}</h3>
                            <img src={skill.img} alt='skill photo'></img>
                            <p>{skill.rarity}</p>
                            <p>{skill.description}</p>
                          </li>
                        )
                      }
              })
            }
            </ul>
          </section>
          <section className="attributes">
            <h2>Attributes</h2>
            <ul>
              <li>
                <h3>Class specific attribute</h3>
                <p>This attribute affects these stats:</p>
                <ul>
                  <li>stat: what stat does</li>
                  <li>stat: what stat does</li>
                </ul>
                <p>You should put (x) points per level in this attribute</p>
              </li>
              <li>
                <h3>Stam attribute</h3>
                <p>This attribute affects these stats:</p>
                <ul>
                  <li>stat: what stat does</li>
                  <li>stat: what stat does</li>
                </ul>
                <p>You should put (x) points per level in this attribute</p>
              </li>
              <li>
                <h3>Tech attribute</h3>
                <p>This attribute affects these stats:</p>
                <ul>
                  <li>stat: what stat does</li>
                  <li>stat: what stat does</li>
                </ul>
                <p>You should put (x) points per level in this attribute</p>
              </li>
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
            <h2>Tempers</h2>
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
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
              <li>
                <h3>Clatter card name</h3>
                <p>[placeholder for image]</p>
                <p>clatter card description</p>
              </li>
            </ul>
          </section>
          <Link to='/Signup-login'><button>Save Build</button></Link>
        </div>
      </>
    )
  }
}

export default ClassPage
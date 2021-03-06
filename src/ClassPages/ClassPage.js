/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { assassinSkills, druidSkills, gladSkills, hunterSkills, mageSkills, shamanSkills, warlockSkills, warriorSkills } from '../skills/skills';
import SkillList from './SkillList';
import ClatterList from './ClatterList';
import { assassinAttributes, druidAttributes, gladAttributes, hunterAttributes, mageAttributes, shamanAttributes, warlockAttributes, warriorAttributes } from '../attributes/ClassAttributes';
import TemperList from './TemperList';

import './ClassPage.css';

/**@class ClassPage component that displays all the relevant information about the selected class. Upon mounting, sets the state to the appropriate class name, skills and attributes to enable the
 * functionality of the filter buttons.
 */

class ClassPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  };
  
  state = {
    skills: [],
    name: '',
    attributes: [],
    recSkills: false,
    recTempers: false,
    recClatters: false
  };

  componentDidMount = () => {
    if(this.props.location.pathname === "/Assassin") {
      this.setState({
        skills: assassinSkills,
        name: "Assassin",
        attributes: assassinAttributes
      });
    };

    if(this.props.location.pathname === "/Druid") {
      this.setState({
        skills: druidSkills,
        name: "Druid",
        attributes: druidAttributes
      });
    };

    if(this.props.location.pathname === "/Hunter") {
      this.setState({
        skills: hunterSkills,
        name: "Hunter",
        attributes: hunterAttributes
      });
    };

    if(this.props.location.pathname === "/Shaman") {
      this.setState({
        skills: shamanSkills,
        name: "Shaman",
        attributes: shamanAttributes
      });
    };

    if(this.props.location.pathname === "/Gladiator") {
      this.setState({
        skills: gladSkills,
        name: "Gladiator",
        attributes: gladAttributes
      });
    };

    if(this.props.location.pathname === "/Warlock") {
      this.setState({
        skills: warlockSkills,
        name: "Warlock",
        attributes: warlockAttributes
      });
    };

    if(this.props.location.pathname === "/Warrior") {
      this.setState({
        skills: warriorSkills,
        name: "Warrior",
        attributes: warriorAttributes
      });
    };

    if(this.props.location.pathname === "/Mage") {
      this.setState({
        skills: mageSkills,
        name: "Mage",
        attributes: mageAttributes
      });
    };
  };

  handleRecSkillsClicked = (e) => {
    e.preventDefault()
    this.setState({
      recSkills: !this.state.recSkills
    });
  };

  handleRecTempersClicked = (e) => {
    e.preventDefault()
    this.setState({
      recTempers: !this.state.recTempers
    });
  };

  handleRecClattersClicked = (e) => {
    e.preventDefault()
    this.setState({
      recClatters: !this.state.recClatters
    });
  };

  render() {
    let currentSkills = this.state.skills;
    let currentName = this.state.name;
    let currentAttributes = this.state.attributes;

    return (
      <>
      <main className="class">
        <div className="sections">
          <h1 className="title">{currentName}</h1>
          <section className="skill">
            <h2>Skills</h2>
            <button className="recommended" onClick={e => {this.handleRecSkillsClicked(e)}}>Recommended Only</button>
            <SkillList currentSkills={currentSkills} recSkills={this.state.recSkills} currentName={currentName}/>
          </section>
          <section className="attributes">
            <h2>{currentName} Attributes</h2>
            <ul>
              {currentAttributes.map((attribute, idx) => {
                return (
                  <li key={idx}>
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
          <section className="temper">
            <h2>{currentName} Tempers</h2>
            <button className="recommendedTemper" onClick={e => this.handleRecTempersClicked(e)}>Recommended Tempers</button>
            <ul>
              <TemperList currentName={currentName} recTempers={this.state.recTempers}/>
            </ul>  
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
          <Link to='/Login'><button id="save">Save Build</button></Link>
        </div>
        </main>
      </>
    );
  };
};

export default ClassPage;
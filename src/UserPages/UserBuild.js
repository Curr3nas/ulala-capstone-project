import React from 'react';
import { Link } from 'react-router-dom';
import { assassinSkills, druidSkills, gladSkills, hunterSkills, mageSkills, shamanSkills, warlockSkills, warriorSkills } from '../skills/skills';
import { assassinAttributes, druidAttributes, gladAttributes, hunterAttributes, mageAttributes, shamanAttributes, warlockAttributes, warriorAttributes } from '../attributes/ClassAttributes';
import BuildTemperList from './BuildTemperList';
import BuildSkillList from './BuildSkillList';
import BuildClatterList from './BuildClatterList';

import '../ClassPages/ClassPage.css';

class UserBuild extends React.Component {

  state = {
    skills: [],
    name: "",
    attributes: []
  };

  componentDidMount = () => {
    if(this.props.match.params.build === "Assassin") {
      this.setState({
        skills: assassinSkills,
        name: "Assassin",
        attributes: assassinAttributes
      });
    };

    if(this.props.match.params.build === "Druid") {
      this.setState({
        skills: druidSkills,
        name: "Druid",
        attributes: druidAttributes
      });
    };

    if(this.props.match.params.build === "Hunter") {
      this.setState({
        skills: hunterSkills,
        name: "Hunter",
        attributes: hunterAttributes
      });
    };

    if(this.props.match.params.build === "Shaman") {
      this.setState({
        skills: shamanSkills,
        name: "Shaman",
        attributes: shamanAttributes
      });
    };

    if(this.props.match.params.build === "Gladiator") {
      this.setState({
        skills: gladSkills,
        name: "Gladiator",
        attributes: gladAttributes
      });
    };

    if(this.props.match.params.build === "Warlock") {
      this.setState({
        skills: warlockSkills,
        name: "Warlock",
        attributes: warlockAttributes
      });
    };

    if(this.props.match.params.build === "Warrior") {
      this.setState({
        skills: warriorSkills,
        name: "Warrior",
        attributes: warriorAttributes
      });
    };

    if(this.props.match.params.build === "Mage") {
      this.setState({
        skills: mageSkills,
        name: "Mage",
        attributes: mageAttributes
      });
    };
  } ;

  render() {
    let currentSkills = this.state.skills;
    let currentName = this.state.name;
    let currentAttributes = this.state.attributes;
    let back= `/UserBuilds/${this.props.match.params.user_name}`;

    return (
      <>
        <main className="class">
        <div className="sections">
          <h1 className="title">{currentName}</h1>
          <section className="skill">
            <h2>Skills</h2>
              <BuildSkillList currentSkills={currentSkills} recSkills={this.state.recSkills} currentName={currentName}/>
          </section>
          <section className="attributes">
            <h2>{currentName} Attributes</h2>
            <ul>
              {currentAttributes.map((attribute, idx) => {
                return (
                  <li key={idx}>
                    <h3>{attribute.name}</h3>
                    <p>{attribute.allocation}</p>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="temper">
            <h2>{currentName} Tempers</h2>
            <ul>
              <BuildTemperList currentName={currentName} recTempers={this.state.recTempers}/>
            </ul>  
          </section>
          <section className="clatter">
            <h2>Clatter Cards</h2>
              <BuildClatterList currentName={currentName} />
          </section>
          <Link to={back}><button>Back to Builds</button></Link>
        </div>
        </main>
      </>
    );
  };
};

export default UserBuild;
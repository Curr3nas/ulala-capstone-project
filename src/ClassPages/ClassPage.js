/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import { assassinSkills } from '../skills/assassin-skills'
import { druidSkills } from '../skills/druid-skills'
import { hunterSkills } from '../skills/hunter-skills'
import { gladSkills } from '../skills/glad-skills'


class ClassPage extends React.Component {
  
  state = {
    selected: false
  }

  render() {

    return (
      <>
        <div class="classes">
          <section class="skills gray">
            <h2 class="skills">Skills</h2>
            <button class="legendary">Legendary Only</button>
            <button class="recommended">Recommended Only</button>
            <ul>
              {gladSkills.map(skill => {
                if (skill.type) {
                          return (
                            <li>
                              <h3>{skill.name}</h3>
                              <img src={skill.img} alt='skill photo'></img>
                              <p>{skill.rarity}</p>
                              <p>{skill.type}</p>
                              <p>{skill.description}</p>
                            </li>
                          )
                      } else { 
                        return (
                          <li>
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
          <section class="attributes">
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
          <section class="wish gray">
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
          <section class="temper">
            <h2>Tempers</h2>
            <button class="recommendedTemper">Recommended Tempers</button>
            <dl>
              <dt>temper name</dt>
              <dd>temper description</dd>
              <dt>temper name</dt>
              <dd>temper description</dd>
              <dt>temper name</dt>
              <dd>temper description</dd>
            </dl>  
          </section>
          <section class="clatter gray">
            <h2>Clatter Cards</h2>
            <button class="recommendedClatter">Recommended Cards</button>
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
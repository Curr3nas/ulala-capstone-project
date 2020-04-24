import React from 'react'
import { Link } from 'react-router-dom'
import BuildApiService from '../Services/build-api-service'

import './UserBuildSelect.css'

class UserBuildSelect extends React.Component {
  
  state = {
    userName: '',
    classes: '',
    src: '',
    checked: false
  }

  componentDidMount = () => {
    BuildApiService.getUserBuild(this.props.match.params.user_name)
      .then(res => {
        this.setState({
          userName: res.user_name,
          classes: res.classes
      })
    })
  }

  handleAddBuildSelected = e => {
    e.preventDefault()
    
    if(this.state.classes === "") {
      this.setState({
        classes: e.target.value
      })
    } else {
      this.setState({
        classes: this.state.classes + ', ' + e.target.value
      })
    }

    const build = e.target.value

    BuildApiService.postBuild(this.state.userName, build)

    e.target.value = "Choose a Build"
  }

  handleDeleteBuildClicked = (e, item) => {
    e.preventDefault()
    const classes = this.state.classes.split(', ')
    const newClassesArray = classes.filter(build => build !== item)
    let newClassesString
    for (let i= 0; i < newClassesArray.length; i++) {
      if (!newClassesString) {
        newClassesString = newClassesArray[i]
      } else {
        newClassesString = newClassesString + ', ' + newClassesArray[i]
      }
    }

    this.setState({
      classes: newClassesString
    })

    BuildApiService.deleteBuild(this.state.userName, newClassesString)
  }

  render() {
    let classes = this.state.classes.split(', ')
    let options = ["Assassin", "Druid", "Gladiator", "Hunter", "Mage", "Shaman", "Warlock", "Warrior"]
    let available = options.filter(option => !classes.includes(option))
    let source
    let link

    if (this.state.classes !== "") {
    return (
      <>
      <main className="build">
      <h1>{this.state.userName}'s Builds</h1>
      <select defaultChecked="Choose a build" onChange={e => this.handleAddBuildSelected(e)}>
        <>
        <option value="choose" hidden>Choose a Build</option>
        {available.map(element => {
          return (
            <>
            <option value={element}>{element}</option>
            </>
          )
          })}
        </>
      </select>
      {classes.map(item => {
        source = `../ulala-media/class-images/${item.toLowerCase()}.png`
        link =`/UserBuilds/${this.state.userName}/${item}`
        return (
          <>
          <h2>{item}</h2>
          <Link to={link}><img id="image" src={source} alt={item}></img></Link>
          <button onClick={e => this.handleDeleteBuildClicked(e, item)}>Delete</button>
          </>
        )
      })}
      </main>
      </>
    )
  } else {
    return (
      <>
      <main className="build">
      <h1>{this.state.userName}'s Builds</h1>
      <select defaultChecked="Choose a build" onChange={e => this.handleAddBuildSelected(e)}>
        <>
        <option value="choose" hidden>Choose a Build</option>
        {available.map(element => {
          return (
            <>
            <option value={element}>{element}</option>
            </>
          )
          })}
        </>
      </select>
      </main>
      </>
    )
  }
  }
}

export default UserBuildSelect
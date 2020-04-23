import React from 'react'
import { Link } from 'react-router-dom'
import BuildApiService from '../Services/build-api-service'


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
      console.log(this.state.classes)
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
    
    this.setState({
      classes: this.state.classes + ', ' + e.target.value
    })

    const build = e.target.value

    BuildApiService.postBuild(this.state.userName, build)
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
      <h2>{this.state.userName}'s Builds</h2>
      {classes.map(item => {
        source = `../ulala-media/class-images/${item.toLowerCase()}.png`
        link =`/UserBuilds/${this.state.userName}/${item}`
        return (
          <>
          <h3>{item}</h3>
          <Link to={link}><img src={source} alt={item}></img></Link>
          <button onClick={e => this.handleDeleteBuildClicked(e, item)}>Delete</button> <button>Change Class</button>
          </>
        )
      })}
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
      </>
    )
  } else {
    return (
      <>
      <h2>{this.state.userName}'s Builds</h2>
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
      </>
    )
  }
  }
}

export default UserBuildSelect
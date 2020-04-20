import React from 'react'
import { Link } from 'react-router-dom'
import BuildApiService from '../Services/build-api-service'


class UserBuildSelect extends React.Component {
  
  state = {
    userName: '',
    classes: '',
    src: ''
  }

  componentDidMount = (id) => {
    BuildApiService.getUserBuild(1)
      .then(res => {
        this.setState({
          userName: res.user_name,
          classes: res.classes
      })
    })
  }

  render() {
    let classes = this.state.classes.split(', ')
    let source
    let link
    return (
      <>
      <h2>{this.state.userName}'s Builds</h2>
      {classes.map(item => {
        source = `../ulala-media/class-images/${item.toLocaleLowerCase()}.png`
        link =`/UserBuilds/1/${item}`
        return (
          <>
          <h3>{item}</h3>
          <Link to={link}><img src={source}></img></Link>
          </>
        )
      })}
      </>
    )
  }
}

export default UserBuildSelect
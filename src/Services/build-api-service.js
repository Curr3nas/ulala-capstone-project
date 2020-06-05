import config from '../config'
import TokenService from './token-service'

/**@BuildApiService this module is responsible for all of the api calls to the server.*/

const BuildApiService = {
  getUserBuild(user_name) {
    return fetch(`${config.API_ENDPOINT}/UserBuilds/${user_name}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      )
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/Login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  },
  postBuild(user_name, build) {
    return fetch(`${config.API_ENDPOINT}/UserBuilds/${user_name}`, {
      method: 'PATCH',
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({build})
    })
  },
  deleteBuild(user_name, build) {
    return fetch(`${config.API_ENDPOINT}/UserBuilds/${user_name}`, {
      method: 'DELETE',
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({build})
    })
  }
}

export default BuildApiService
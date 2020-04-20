import config from '../config'

const BuildApiService = {
  getUserBuild(id) {
    return fetch(`${config.API_ENDPOINT}/${id}`, {
      headers: {

      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e=> Promise.reject(e))
        : res.json()
      )
  },
}

export default BuildApiService
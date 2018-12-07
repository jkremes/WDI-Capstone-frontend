import Api from './Api'
import store from '../store'

export default {
  signUp (params) {
    return Api().post('/sign-up', params)
  },
  signIn (params) {
    return Api().post('/sign-in', params)
  },
  signOut () {
    let token = store.state.token
    return Api().delete('/sign-out', { headers: {"Authorization" : `Bearer ${token}`} })
  },
  changePassword (params) {
    let token = store.state.token
    return Api().patch('/change-password', params, { headers: {"Authorization" : `Bearer ${token}`} })
  },
  createTroop (params) {
    let token = store.state.token
    return Api().post('/subordinates', params, { headers: {"Authorization" : `Bearer ${token}`} })
  },
  getTroops () {
    let token = store.state.token
    return Api().get('/subordinates', { headers: {"Authorization" : `Bearer ${token}`} })
    // .then(console.log(response))
  },
  deleteTroop (id) {
    let token = store.state.token
    return Api().delete('/subordinates/' + id, { headers: {"Authorization" : `Bearer ${token}`} })
  },
  updateTroop (params) {
    console.log(params.item)
    let token = store.state.token
    let id = params.item._id
    console.log(id)
    return Api().patch('/subordinates/' + id, params.item, { headers: {"Authorization" : `Bearer ${token}`} })
  }
}

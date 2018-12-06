import Api from './Api'
import store from '../store'

export default {
  signUp (params) {
    return Api().post('sign-up', params)
  },
  signIn (params) {
    return Api().post('sign-in', params)
  },
  signOut () {
    let params = store.state.token
    return Api().delete('/sign-out', { headers: {"Authorization" : `Bearer ${params}`} })
  },
  changePassword (params) {
    return Api().patch('change-password', params)
  }
}
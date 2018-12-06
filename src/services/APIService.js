import Api from './Api'

export default {
  signUp (params) {
    return Api().post('sign-up', params)
  },
  signIn (params) {
    return Api().post('sign-in', params)
  }
}
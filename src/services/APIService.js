import Api from './Api'

export default {
  signUp (params) {
    return Api().post('sign-up', params)
  }
}
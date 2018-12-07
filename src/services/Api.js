import axios from 'axios'
import config from '../config'

export default() => {
  return axios.create({
    // baseURL: config.apiUrl
    // baseURL: `http://localhost:4741`
    // baseUrl: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : '/'
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/WDI-Capstone-frontend/'
      : '/'
  })
}


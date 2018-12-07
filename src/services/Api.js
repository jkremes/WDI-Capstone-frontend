import axios from 'axios'
// import config from '../config'
let apiUrl
const apiUrls = {
  production: 'https://mysterious-mesa-43439.herokuapp.com/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default() => {
  return axios.create({
    baseURL: apiUrl
    // baseURL: config.apiUrl
    // baseURL: `http://localhost:4741`
    // baseUrl: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : '/'
    // baseUrl: process.env.NODE_ENV === 'production'
    //   ? '/WDI-Capstone-frontend/'
    //   : '/'
  })
}


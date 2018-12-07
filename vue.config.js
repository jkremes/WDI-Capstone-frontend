// let apiUrl
// const apiUrls = {
//   production: 'https://mysterious-mesa-43439.herokuapp.com/',
//   development: 'http://localhost:4741'
// }

// if (process.env.NODE_ENV === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/WDI-Capstone-frontend/'
      : '/',
      devServer: {
        proxy: 'https://mysterious-mesa-43439.herokuapp.com/'
        // proxy: 'http://localhost:4741'
      }
  }
  
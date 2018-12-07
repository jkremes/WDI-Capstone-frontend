module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/WDI-Capstone-frontend/'
      : '/',
      devServer: {
        proxy: 'https://mysterious-mesa-43439.herokuapp.com/'
      }
  }
  
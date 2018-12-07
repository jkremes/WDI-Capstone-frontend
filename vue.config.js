module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/WDI-Capstone-frontend/'
      : '/',
      configureWebpack: {
        devtool: 'source-map'
      },
      devServer: {
        proxy: 'https://mysterious-mesa-43439.herokuapp.com/'
      }
  }
  
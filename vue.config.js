module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/WDI-Capstone-frontend'
      : '/',
      configureWebpack: {
        devtool: 'source-map'
      }
  }
  
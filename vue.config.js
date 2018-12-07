module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/WDI-Capstone-frontend/'
      : '/',
      configureWebpack: {
        devtool: 'source-map'
      },
      devServer: {
        proxy: 'http://localhost:4741'
      }
  }
  
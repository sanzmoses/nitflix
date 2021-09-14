module.exports = {
    css: {
      loaderOptions: {
        // pass Less.js Options to less-loader
        
        less:{
            additionalData: `@import "~@/assets/styles/global.less";`,
            lessOptions: {
                strictMath: false,
            },
        }
      }
    },

    publicPath: process.env.NODE_ENV === 'production'
    ? '/nitflix/'
    : '/'
  }
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
  }
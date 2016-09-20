var config = require('./webpack.base.config')

config.devtool = '#source-map'

config.devServer = {
  noInfo: true,
  proxy: {
    '/api/*': {
      target: 'http://139.196.87.99/mkj', // 测试环境
      secure: false
    }
  }
}

module.exports = config
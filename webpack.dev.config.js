var config = require('./webpack.base.config')

config.devtool = '#source-map'

config.devServer = {
  noInfo: true,
  proxy: {
    '/api/v1/*': {
      target: 'https://cnodejs.org', // 测试环境
      secure: false
    }
  }
}

module.exports = config

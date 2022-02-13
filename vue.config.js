const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    // 配置路径
    config.resovle.alias
      .set('@', path.resolve('src'))
      .set('components', 'src/components')
  }
}

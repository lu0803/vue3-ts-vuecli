const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')

module.exports = {
  devServer: {
    proxy: {
      '^api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 3. 配置方式三：链式调用
  chainWebpack: (config) => {
    // 配置路径
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('src', path.resolve(__dirname, 'src'))
      .set('components', path.resolve(__dirname, '@/components'))
    // 按需引入 element-plus
    // config.plugin('AutoImport').use(
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // )
    // config.plugin('Components').use(
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // )
  }
}

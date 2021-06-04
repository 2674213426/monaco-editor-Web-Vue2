const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  lintOnSave: false,

  /* 或者使用下面这种方法 */
  // chainWebpack: (config) => {
  //   config.plugin('monaco-editor').use(MonacoWebpackPlugin)
  // },

  /* 配置代理 */
  devServer: {
    proxy: 'http://192.168.0.133:8080'
  },

  /* 配置 plugin */
  configureWebpack: {
    plugins:[new MonacoWebpackPlugin()]
  }
}

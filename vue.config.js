const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  lintOnSave: false,

  /* 或者使用下面这种方法 */
  // chainWebpack: (config) => {
  //   config.plugin('monaco-editor').use(MonacoWebpackPlugin)
  // },

  configureWebpack: {
    plugins:[new MonacoWebpackPlugin()]
  }
}

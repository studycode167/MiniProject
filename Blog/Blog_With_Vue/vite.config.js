const path = require('path')


module.exports = {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '/@/': path.resolve (__dirname, './src'),
      '/@compoenents/':path.resolve(__dirname, './src/compoenents'),
      '/@app_modules/': path.resolve(__dirname, './src/modules'), 
      '/@store': path.resolve(__dirname, './src/store',)
    },
}
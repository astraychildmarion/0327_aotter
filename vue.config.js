const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	chainWebpack: config => {
		config.module.rule('pug')
			.test(/\.pug$/)
			.use('pug-html-loader')
			.loader('pug-html-loader')
			.end()
	},
	css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {
            drop_console: true,
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      })
    };
    // resolve: {
    //   alias: {
    //     'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
    //   }
    // }
  }
}

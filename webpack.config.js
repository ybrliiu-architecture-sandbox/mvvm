const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist/`
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  resolve: {
    alias: {
      // デフォルトのランタイムのみビルドだと動かないので、完全ビルド版を指定する必要がある.
      // https://jp.vuejs.org/v2/guide/installation.html#%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0-%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%81%A8%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E9%99%90%E5%AE%9A%E3%81%AE%E9%81%95%E3%81%84
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    contentBase: `${__dirname}/public/`,
  },
};

const path = require('path')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['react', 'react-dom', 'react-router', 'react-router-dom', 'prop-types', 'whatwg-fetch'],
  },
  output: {
    filename: '[name].[fullhash].dll.js',
    library: '[name]_[fullhash]',
    path: path.resolve(__dirname, '../../public/dll'),
    // publicPath: `${cdn}/web/static/`,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      format: true,
      name: '[name]_[fullhash]',
      path: path.resolve(__dirname, '../../public/dll/[name].manifest.json'),
    }),

    new CompressionWebpackPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    // upload cdn
    // 上传至 腾讯云、阿里云、UCloud、AWS 请自行封插件
  ],
}

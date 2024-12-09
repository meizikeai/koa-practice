import path from 'path'
import webpack from 'webpack'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  mode: 'production',
  devtool: false,
  entry: {
    vendors: ['react', 'react-dom', 'prop-types', 'whatwg-fetch'],
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 Chrome versions'],
                  },
                },
              ],
              ['@babel/preset-react'],
            ],
          },
        },
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

    // Upload to Cloud Space, please disable the plugin yourself
  ],
}

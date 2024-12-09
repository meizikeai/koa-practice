import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { fileURLToPath } from 'url'
import { plugin, isDirectory } from './config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = {
  stats: {
    colors: true,
    modules: false,
  },
  output: {
    filename: '[name]~[contenthash:8].js',
    chunkFilename: '[name]~[contenthash:8].js',
    path: path.resolve(__dirname, '../../public/build'),
    publicPath: '/build/',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      cacheGroups: {
        runtime: {
          name: 'runtime',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          name: 'default',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  externals: {},
  plugins: [
    // new webpack.IgnorePlugin({}),
  ],
}

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name]~[contenthash:8].css',
  chunkFilename: '[name]~[contenthash:8].css',
})

const compressionPlugin = new CompressionWebpackPlugin({
  filename: '[path][base].gz',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
})

const htmlWebpack = (paths) => {
  const result = paths.map((data) => {
    const name = data.replace(/~/gi, '/')
    const userFile = path.resolve(__dirname, `../pages/${name}/index.hbs`)
    const defaultFile = path.resolve(__dirname, '../templates/index.hbs')
    const filter = fs.existsSync(userFile)

    return new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, `../../views/${name}.hbs`),
      template: filter ? userFile : defaultFile,
      chunks: [data],
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    })
  })

  return result
}

const findEntryFile = (directory, depth) => {
  let result = []

  if (depth > 2) return result

  const data = fs.readdirSync(directory, { withFileTypes: true })

  for (const item of data) {
    if (item.isFile() && item.name === 'index.js') {
      result.push(path.join(directory, item.name))
    } else if (item.isDirectory() && depth < 2) {
      result = result.concat(findEntryFile(path.join(directory, item.name), depth + 1))
    }
  }

  return result
}

export default (env, argv) => {
  const entry = {}

  if (env.all === 'true') {
    const pathList = findEntryFile(path.resolve(__dirname, '../pages/'), 0)

    pathList.forEach((item) => {
      const tplPath = `${item.split('/pages/')[1].split('/index.js')[0]}`
      const page = tplPath.replace(/\//gi, '~')

      entry[page] = [item]
    })
  } else {
    const page = env.p.replace(/\//gi, '~')
    const dir = path.resolve(__dirname, `../pages/${env.p}`)

    entry[page] = isDirectory(dir) ? [`${dir}/index.js`] : [`${dir}.js`]
  }

  config.entry = entry
  config.plugins.push(miniCssPlugin)
  config.plugins.push(...htmlWebpack(env.all === 'true' ? Object.keys(entry) : [env.p.replace(/\//gi, '~')]))

  plugin.dll.forEach((file) => {
    const tags = {
      append: false,
      tags: file,
    }

    tags.publicPath = '/dll/'

    // if (argv.mode !== 'production') {
    //   tags.publicPath = '/dll/'
    // }

    config.plugins.push(new HtmlWebpackTagsPlugin(tags))
  })

  plugin.manifest.forEach((file) => {
    config.plugins.push(
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../../public/dll', file),
      })
    )
  })

  if (argv.mode === 'production') {
    config.devtool = false
    // config.output.publicPath = `${cdn}/web/static/`
    config.optimization.minimize = true
    config.plugins.push(compressionPlugin)
    // config.plugins.push( Upload to Cloud Space, please disable the plugin yourself )
  } else {
    config.devtool = 'inline-source-map'
    config.watch = true
    config.watchOptions = {
      aggregateTimeout: 300,
      ignored: ['logs', 'node_modules', 'pm2', 'public', 'server', 'views'],
    }
  }

  return config
}

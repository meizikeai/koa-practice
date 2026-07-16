import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { getDirname, plugin, isDirectory } from './config.js'

const dirname = getDirname(import.meta.url)

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
  const isEnvProduction = argv.mode === 'production'
  const isEnvDevelopment = !isEnvProduction

  const htmlWebpack = (paths) => {
    const cfg = {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    }

    return paths.map((data) => {
      const name = data.replace(/~/gi, '/')
      const userFile = path.resolve(dirname, `../pages/${name}/index.hbs`)
      const defaultFile = path.resolve(dirname, '../templates/index.hbs')
      const filter = fs.existsSync(userFile)

      return new HtmlWebpackPlugin({
        filename: path.resolve(dirname, `../../views/${name}.hbs`),
        template: filter ? userFile : defaultFile,
        chunks: [data],
        minify: isEnvProduction ? cfg : false,
      })
    })
  }

  const config = {
    mode: argv.mode || 'development',
    stats: {
      colors: true,
      modules: false,
    },
    output: {
      filename: '[name]~[contenthash:8].js',
      chunkFilename: '[name]~[contenthash:8].js',
      path: path.resolve(dirname, '../../public/build'),
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
        },
      },
      runtimeChunk: true,
      minimize: isEnvProduction,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin({ extractComments: false })],
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
                [
                  '@babel/preset-react',
                  {
                    development: isEnvDevelopment,
                    runtime: 'automatic',
                  },
                ],
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
    plugins: [],
  }

  const entry = {}
  if (env.all === 'true') {
    const pathList = findEntryFile(path.resolve(dirname, '../pages/'), 0)
    pathList.forEach((item) => {
      const tplPath = `${item.split('/pages/')[1].split('/index.js')[0]}`
      const page = tplPath.replace(/\//gi, '~')
      entry[page] = [item]
    })
  } else {
    const page = env.p.replace(/\//gi, '~')
    const dir = path.resolve(dirname, `../pages/${env.p}`)
    entry[page] = isDirectory(dir) ? [`${dir}/index.js`] : [`${dir}.js`]
  }

  config.entry = entry

  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name]~[contenthash:8].css',
    chunkFilename: '[name]~[contenthash:8].css',
  })
  config.plugins.push(miniCssPlugin)

  const pagesToHtml = env.all === 'true' ? Object.keys(entry) : [env.p.replace(/\//gi, '~')]
  config.plugins.push(...htmlWebpack(pagesToHtml))

  plugin.dll.forEach((file) => {
    config.plugins.push(
      new HtmlWebpackTagsPlugin({
        append: false,
        tags: file,
        publicPath: '/dll/',
      }),
    )
  })

  plugin.manifest.forEach((file) => {
    config.plugins.push(
      new webpack.DllReferencePlugin({
        manifest: path.resolve(dirname, '../../public/dll', file),
      }),
    )
  })

  if (isEnvProduction) {
    config.devtool = false
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    )
    // config.output.publicPath = `${cdn}/static/`
    // config.plugins.push('To upload to Cloud Space, please install the required plugin.')
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

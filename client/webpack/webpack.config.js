const fs = require('fs')
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const QiniuPlugin = require('qiniu-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { dll, isDirectory, manifest, qiniu } = require('./config')

const environment = ['core-js/es/map', 'core-js/es/set']

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
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          name: 'vendors',
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
    minimizer: [
      new OptimizeCssAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    // jquery: 'jQuery',
  },
  resolve: {
    // alias: {
    //   '@components': path.resolve(__dirname, '../components'),
    //   '@utils': path.resolve(__dirname, '../utils'),
    // },
    // extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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

const qiniuPlugin = new QiniuPlugin({
  ACCESS_KEY: qiniu.accessKey,
  SECRET_KEY: qiniu.secretKey,
  bucket: qiniu.bucket,
  path: 'web/static/',
  include: [
    /\.js$/,
    /\.js.gz$/,
    /\.css$/,
    /\.css.gz$/,
  ],
})

const htmlWebpack = paths => {
  const result = paths.map(data => {
    const name = data.replace(/~/ig, '/')
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

const uglifyWebpack = mode => {
  const option = {
    cache: true,
    parallel: true,
    sourceMap: true,
  }

  if (mode === 'production') {
    option.uglifyOptions = {
      compress: {
        drop_console: true,
      },
    }
  }

  return new UglifyWebpackPlugin(option)
}

module.exports = (env, argv) => {
  const entry = {}

  if (env.all === 'true') {
    const base = [
      path.resolve(__dirname, '../pages/*/index.js'),
      path.resolve(__dirname, '../pages/*/*/index.js'),
    ]

    base.forEach(data => {
      const pathList = glob.sync(path.resolve(__dirname, data))

      pathList.forEach(item => {
        const tplPath = `${item.split('/pages/')[1].split('/index.js')[0]}`
        const page = tplPath.replace(/\//ig, '~')

        entry[page] = environment.concat([item])
      })
    })
  } else {
    const page = env.p.replace(/\//ig, '~')
    const dir = path.resolve(__dirname, `../pages/${env.p}`)

    entry[page] = isDirectory(dir)
      ? environment.concat([`${dir}/index.js`])
      : environment.concat([`${dir}.js`])
  }

  config.entry = entry
  config.plugins.push(miniCssPlugin)
  config.plugins.push(...htmlWebpack(env.all === 'true' ? Object.keys(entry) : [env.p.replace(/\//ig, '~')]))
  config.optimization.minimizer.push(uglifyWebpack(argv.mode))

  dll.forEach(file => {
    const tags = {
      append: false,
      tags: file,
    }

    if (argv.mode !== 'production') {
      tags.publicPath = '/dll/'
    }

    config.plugins.push(new HtmlWebpackTagsPlugin(tags))
  })

  manifest.forEach(file => {
    config.plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../../public/dll', file),
    }))
  })

  if (argv.mode === 'production') {
    config.devtool = false
    config.output.publicPath = `${qiniu.cdnBase}/web/static/`
    config.optimization.minimize = true
    config.plugins.push(new CleanWebpackPlugin())
    config.plugins.push(compressionPlugin)
    config.plugins.push(qiniuPlugin)
  } else {
    config.devtool = 'inline-source-map'
    config.watch = true
    config.watchOptions = {
      aggregateTimeout: 300,
      ignored: [
        'build',
        'logs',
        'node_modules',
        'pm2',
        'public',
        'server',
        'views',
      ],
    }
  }

  return config
}

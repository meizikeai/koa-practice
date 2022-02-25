const fs = require('fs')
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { dll, isDirectory, manifest } = require('./config')

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
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
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
                plugins: [['autoprefixer']],
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
    alias: {
      '@components': path.resolve(__dirname, '../components'),
      '@utils': path.resolve(__dirname, '../utils'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
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

module.exports = (env, argv) => {
  const entry = {}

  if (env.all === 'true') {
    const base = [path.resolve(__dirname, '../pages/*/index.js'), path.resolve(__dirname, '../pages/*/*/index.js')]

    base.forEach((data) => {
      const pathList = glob.sync(path.resolve(__dirname, data))

      pathList.forEach((item) => {
        const tplPath = `${item.split('/pages/')[1].split('/index.js')[0]}`
        const page = tplPath.replace(/\//gi, '~')

        entry[page] = [item]
      })
    })
  } else {
    const page = env.p.replace(/\//gi, '~')
    const dir = path.resolve(__dirname, `../pages/${env.p}`)

    entry[page] = isDirectory(dir) ? [`${dir}/index.js`] : [`${dir}.js`]
  }

  config.entry = entry
  config.plugins.push(miniCssPlugin)
  config.plugins.push(...htmlWebpack(env.all === 'true' ? Object.keys(entry) : [env.p.replace(/\//gi, '~')]))

  dll.forEach((file) => {
    const tags = {
      append: false,
      tags: file,
    }

    if (argv.mode !== 'production') {
      tags.publicPath = '/dll/'
    }

    config.plugins.push(new HtmlWebpackTagsPlugin(tags))
  })

  manifest.forEach((file) => {
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
    // config.plugins.push( 上传至 腾讯云、阿里云、UCloud、AWS 请自行封插件 )
  } else {
    config.devtool = 'inline-source-map'
    config.watch = true
    config.watchOptions = {
      aggregateTimeout: 300,
      ignored: ['build', 'logs', 'node_modules', 'pm2', 'public', 'server', 'views'],
    }
  }

  return config
}

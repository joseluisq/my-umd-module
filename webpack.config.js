const { resolve } = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENV = process.env.NODE_ENV
const PORT = process.env.APP_PORT || 8080
const LIBRARY = 'MyUMDModule'

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: []
}

if (ENV === 'development') {
  config.devtool = '#eval'

  config.entry = [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/app.js'
  ]

  config.node = {
    fs: 'empty'
  }

  config.devServer = {
    hot: true,
    port: PORT,
    contentBase: resolve(__dirname, 'src')
  }

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader?sourceMap',
      'postcss-loader?sourceMap=inline',
      'sass-loader?sourceMap'
    ]
  })
  config.module.rules.push({
    test: /\.html$/,
    loader: 'html-loader'
  })

  config.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  )

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  )
}

if (ENV === 'production') {
  config.output = {
    library: LIBRARY,
    libraryTarget: 'umd'
  }

  config.plugins.push(
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__DEVTOOLS__': false
    })
  )
}

module.exports = config

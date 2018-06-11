const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: ''
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: '/',
      historyApiFallback: true
    },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader?limit=1024&name=images/[name].[ext]'
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './images/favicon.png',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.IgnorePlugin(/^(net|http|child_process|timers|dns|fs|zlib)$/)
  ]
};

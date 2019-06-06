const webpack = require('webpack');
const {
  resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        resolve(__dirname, 'src') + '/index.jsx'
    ],
    node: {
        fs: "empty"},

    output: {
        filename: 'app.bundle.js',
        path: resolve(__dirname, 'build'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: '#source-map',
    devServer: {hot: true,
        contentBase: resolve(__dirname, 'build')},

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {
              "modules": false
            }],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel",
            "styled-jsx/babel"
          ]
        }
      },
      {
        test: /\.(png|gif|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.ejs',
      appMountId: 'react-app-root',
      title: 'Coding-Against-Humility',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ]
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((acc, cv) => {
    acc[`process.env.${cv}`] = JSON.stringify(env[cv]);
    return acc;
}, {});

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: process.env.NODE_ENV === 'production' ? '/build/' : '/',
  },
  plugins: [
    new HtmlWebpackPlugin({title: "Pick Up Pulse", template: './public/index.html'}),
    new webpack.DefinePlugin(envKeys)
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // where the fonts will go
            },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.join(__dirname,'build')
    },
    historyApiFallback: true,
    proxy: {
      '/api' : 'http://localhost:3000'
    },
    port: 8000
  }
}
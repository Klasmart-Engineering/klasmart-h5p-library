const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = (nodeEnv === 'production');

module.exports = {
  mode: nodeEnv,
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress:{
            drop_console: false,
          }
        }
      }),
    ],
  },
  entry: {
    dist: './src/custom/entry.js'
  },
  output: {
    filename: 'h5p/custom/customScripts.js',
    path: path.resolve(__dirname, '')
  },
  target: ['web'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: (isProd) ? undefined : 'eval-cheap-module-source-map',
  plugins: [
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    })
  ]
};

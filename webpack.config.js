var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var env = process.env.MIX_ENV || 'dev';
var isProduction = (env === 'prod');

var plugins = [
  new ExtractTextPlugin('css!sass'),
  new CopyWebpackPlugin([
      { from: './web/static/assets' },
      { from: './deps/phoenix_html/web/static/js/phoenix_html.js',
        to: 'js/phoenix_html.js' }
    ]),
  new webpack.DefinePlugin({
    PRODUCTION: isProduction,
  })
];

// This is necessary to get the sass @import's working
var stylePathResolves = (
    'includePaths[]=' + path.resolve('./') + '&' +
    'includePaths[]=' + path.resolve('./node_modules')
  );

if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = {
  devtool: 'source-map',
  entry: './web/static/js/index.js',

  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },

  resolve: {
    alias: {
      phoenix: __dirname + '/deps/phoenix/web/static/js/phoenix.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }   ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: plugins
};

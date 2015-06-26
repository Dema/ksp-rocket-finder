var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/js/index', 'webpack/hot/dev-server'],
    vendor: ['react', 'alt', 'immutable', 'react-router']
  },
  quiet: false,
  noInfo: false,
  lazy: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
  inline: true,

  output: {
    path: require("path").resolve("."),
    publicPath: "/public/js",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['jsx?harmony'],
        exclude: /node_modules/
      }

    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    //      new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};

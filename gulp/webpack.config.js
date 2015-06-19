var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/js/index'
    ],
    output: {
        publicPath: "/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx?harmony'], exclude: /node_modules/ }
        ]
    },
    plugins: [
//      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?/, include: APP_DIR, loader: 'babel'}
        ]
    },
    watch: true,
    devtool: "source-map",
    resolve: {
        extensions: ['.jsx', '.js', '']
    }
};

module.exports = config;

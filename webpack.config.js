const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
    entry: APP_DIR + '/index',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, include: APP_DIR, loader: 'babel', query: {presets: ['react']}},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.less$/, loader: "style!css!autoprefixer!less"}
        ]
    },
    watch: true,
    devtool: "source-map",
    resolve: {
        extensions: ['.jsx', '.js', '']
    }
};

module.exports = config;

const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: APP_DIR,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, include: APP_DIR, loader: 'babel-loader', query: {presets: ['react']}
            },
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin({filename: 'bundle.css'})
    ],
    watch: true,
    devtool: "source-map",
    resolve: {
        extensions: ['.jsx', '.js']
    }
};
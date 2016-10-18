var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name]_[hash:5].js'
    },
    module: {
        preloaders: [{
            test: /\.js$/,
            loader: "eslint",
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: "style!css?modules&importLoaders=1!resolve-url!sass"
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    },
    plugins: [
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'admin.html',
            template: './src/index.html',
            inject: 'body',
            cache: true,
            showErrors: false,
            hash: true
        })
    ]
}

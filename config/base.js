var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefix = require('autoprefix');
var precss = require('precss');

var js = glob.sync('./src/pages/**/index.js').reduce(function (prev, curr) {
    prev[curr.slice(6, -3)] = [curr];
    return prev;
}, {});
var pages = glob.sync('./src/pages/**/*.html').map(function (item) {
    return new HtmlWebpackPlugin({
        filename: item.substr(6),
        template: item,
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: true,
            collapseInlineTagWhitespace: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            caseSensitive: true,
            minifyJS: true,
            minifyCSS: true,
            quoteCharactre: '"'
        }
    })
});
module.exports = {
    devtool: 'source-map',
    entry: js,
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
            loader: ExtractTextPlugin.extract('style', 'css', 'postcss', 'sass')
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    },
    plugins: [
        new ProgressBarPlugin(),
        new ExtractTextPlugin('[name].[contenthash:5].css')
    ].concat(pages),
    postcss: [
        autoprefix,
        precss
    ]
}

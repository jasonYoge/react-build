var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    devtool: '#cheap-module-eval-source-map',
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
            loader: "style!css?modules&importLoaders=1!sass"
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    },
    plugins: [
        new ProgressBarPlugin(),
    ].concat(pages)
}

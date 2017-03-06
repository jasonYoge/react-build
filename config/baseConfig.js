var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

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
        path: path.resolve(__dirname, '../build'),
        filename: '[name]_[hash:5].js'
        // publicPath: 'http://www.yangwenjie.net.cn/api/'
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
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.(png|PNG|jpg|gif|svg|woff2|eot|ttf)$/,
            loader: 'url-loader',
            query: {
                limit: 14000,
                name: 'img/[name].[ext]'
            }
        }]
    },
    plugins: [
        new ProgressBarPlugin(),
        new ExtractTextPlugin('[name].[contenthash:5].css'),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '../'),
            manifest: require('../build/vendor/react-manifest.json')
        }),
        new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' })
    ].concat(pages)
}

'use strict';
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//  some paths variable
var pathOfIndexHtml = path.resolve(__dirname, '../src/index.html');
var pathOfIndexJs = path.resolve(__dirname, '../src/index.js');
var pathOfOutputFile = path.resolve(__dirname, '../dist');

// main section of base config
var config = {
    entry: {
        index: [ './src/index.js' ],
        react: ['react', 'react-dom', 'react-router'],
        redux: ['redux', 'react-redux', 'redux-thunk']
    },
    output: {
        path: pathOfOutputFile,
        filename: '[name].[hash:5].js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            //  js || jsx part
            test: /\.(js|jsx)$/,
            // exclude: /node_modules/,
            use: [{
                loader: 'jsx'
            }, {
                loader: 'babel',
                options: {
                    presets: [['es2015', { modules: false }], 'react', 'stage-3'],
                    plugins: ['syntax-dynamic-import']
                }
            }]
        }, {
            //  scss part
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style',
                use: [
                    { loader: 'css' },
                    {
                        loader: 'postcss',
                        options: {
                            plugins: function () {
                                return [ autoprefixer({ browsers: ['> 1%', 'last 2 versions'] })]
                            }
                        }
                    },
                    { loader: 'sass' }
                ]
            })
        }, {
            //  load images
            test: /\.(png|PNG|jpg|gif|svg|woff2|eot|ttf)$/,
            use: [{
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'img/[name].[ext]'
                }
            }]
        }]
    },
    //  set loader subfix to loader name in module section
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        //  show colorful progress bar on packing
        new ProgressBarPlugin(),
        //  extract css files from bundle
        new ExtractTextPlugin('[name].[hash:5].css'),
        //  generate index.html file
        //  create HtmlWebpack object
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: pathOfIndexHtml,
            inject: true,
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react', 'redux'].reverse(),
        })
    ]
}

module.exports = config;

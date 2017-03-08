'use strict';
var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.base.config');

//  generate production config
var prodConfig = merge(config, {
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
});

module.exports = prodConfig;

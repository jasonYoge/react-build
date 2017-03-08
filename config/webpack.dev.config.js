var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.base.config');

var devConfig = merge(config, {
    // output: {
    //     publicPath: './'
    // },
    devServer: {
        // 当浏览器不支持historyApi时采用回退方式实现api
        historyApiFallback: true,
        // 将webpack-dev-server runtime集成到模块打包文件里，可以实现浏览器与服务器的通信
        inline: true,
        // 使用热加载模式
        hot: true,
        stats: {
            // 颜色标记
            colors: true,
            // 不打印块信息
            chunks: false
        }
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin()
    ]
});

devConfig.entry.index.unshift(
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server'
);

module.exports = devConfig;

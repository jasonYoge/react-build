var config =  require('./base');
var webpack = require('webpack');

var devConfig = Object.assign({}, config, {
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
    }
});
devConfig.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    })
]);
/**
 *  为所有的entry数组添加webpack-dev-server
 *  @param {Object} devConfig.entry entry对象
 *  @return {Array} 返回entry中的属性名
 */
Object.keys(devConfig.entry).map(function (name) {
    devConfig.entry[name].unshift('webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server');
})

module.exports = devConfig;

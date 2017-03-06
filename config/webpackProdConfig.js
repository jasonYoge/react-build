var config = require('./base');
var webpack = require('webpack');

var prodConfig = Object.create(config);
prodConfig.output.filename = '[name].[hash:7].js';
prodConfig.output.chunkFilename = '[name].[chunkhash:5].js';
prodConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': 'production'
        }
    }),
    // 优化id顺序
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 不重复生成模块
    new webpack.optimize.DedupePlugin(),
    // 合并块
    new webpack.optimize.AggressiveMergingPlugin(),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: '#source-map',
      compress: {
        // 不考虑对象的边际作用
        pure_getters: true,
        // 不支持ie8
        screw_ie8: true,
        // 进行一些可能会破坏代码的压缩,如new Array会装换为 [1,2,3]
        unsafe: true,
        // 对<,<=转换为 >,>=
        unsafe_comps: true,
        // 不对删除一些unused的代码进行警告
        warnings: false
      },
      output: {
        // 不会将注释带入压缩文件
        comments: false
      }
    })
]);

module.exports = prodConfig;

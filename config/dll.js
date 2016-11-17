var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        react: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
    },
    output: {
        path: path.resolve(__dirname, '../build/vendor'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../build/vendor', '[name]-manifest.json'),
            name: '[name]_library',
            context: path.resolve(__dirname, '../')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false, compress: {
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
            }, output: { comments: false}
        })
    ]
};

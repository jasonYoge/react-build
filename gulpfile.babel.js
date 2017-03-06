'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

//  获取各种Config文件
import webpackDllConfig from './config/webpackDllConfig';
import webpackProdConfig from './config/webpackProdConfig';
import webpackDevConfig from './config/webpackDevConfig';

//  设置别名和路径,$ == gulp
const $ = gulpLoadPlugins();
const contentBase = './src';
const buildPath = 'build/**';

// 开发环境task
function webpackDevTask (callback) {
    const config = webpack(webpackDevConfig);
    $.util.log('webpack:dev is running');
    new WebpackDevServer(config, {
        contentBase: contentBase,
        // 当浏览器不支持historyApi时采用回退方式实现api
        historyApiFallback: true,
         // Set this if you want to enable gzip compression for assets
        compress: true,
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
    }).listen(8080, 'localhost', (err) => {
        if (err) throw new $.util.PluginError(
            $.util.colors.magenta('webpackDevTask invoked an error.'));
    });
    callback();
}
gulp.task(webpackDevTask);

//  生产环境
function webpackProdTask (callback) {
    $.util.log('webpack:prod is running.');
    webpack(webpackProdConfig, (err, stats) => {
        if (err) throw new $.util.PluginError(
            $.util.colors.magenta('webpackProdTask invoked an error.'));
        callback();
    });
}
gulp.task(webpackProdTask);

//  打包dll文件
function webpackDllTask (callback) {
    $.util.log('webpack:dll is running.');
    webpack(webpackDllConfig, (err, stats) => {
        if (err) throw new $.util.PluginError(
            $.util.colors.magenta('webpackDllTask invoked an error.'));
    });
    callback();
}
gulp.task(webpackDllTask);

//  clean生成的build文件夹
function webpackCleanTask (callback) {
    $.util.log('The build clean task is running.');
    return del(buildPath);
}
gulp.task(webpackCleanTask);

//  任务
gulp.task('webpack:dev', gulp.series(webpackDllTask, webpackDevTask));
gulp.task('webpack:dll', gulp.series(webpackCleanTask, webpackDllTask));
gulp.task('webpack:prod', gulp.series(webpackCleanTask, webpackDllTask, webpackProdTask));
gulp.task('webpack:clean', gulp.parallel(webpackCleanTask));

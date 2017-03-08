import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';

//  获取各种Config文件
const webpackProdConfig = require(path.resolve(__dirname, './config/webpack.prod.config'));
const webpackDevConfig = require(path.resolve(__dirname, './config/webpack.dev.config'));

//  设置别名和路径,$ == gulp
const $ = gulpLoadPlugins();
const contentBase = './src';
const buildPath = path.resolve(__dirname, 'dist/**');

// 开发环境task
function webpackDevTask (callback) {
    const config = webpack(webpackDevConfig);
    $.util.log('webpack:dev is running');
    //  open server
    new WebpackDevServer(config).listen(8080, 'localhost', (err) => {
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

//  clean生成的build文件夹
function webpackCleanTask (callback) {
    $.util.log('The build clean task is running.');
    return del(buildPath);
}
gulp.task(webpackCleanTask);

//  任务
gulp.task('webpack:dev', gulp.series(webpackDevTask));
gulp.task('webpack:prod', gulp.series(webpackCleanTask, webpackProdTask));
gulp.task('webpack:clean', gulp.parallel(webpackCleanTask));

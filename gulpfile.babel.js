import gulp from 'gulp';
import gutil from 'gulp-util';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import dllConfig from './config/dll';
/*!
 *  判断引入的是生产环境还是开发环境，不同环境引入不同的配置文件
 */
if (process.env.NODE_ENV === 'production') {
    var prodConfig = require('./config/prod');
}
if (process.env.NODE_ENV === 'development') {
    var devConfig = require('./config/dev');
}

// 开发环境热加载
gulp.task('webpack-dev-server', (callback) => {
    new WebpackDevServer(webpack(devConfig), {
        publicPath: 'http://www.yangwenjie.net.cn/api/'
    }).listen(8080, 'localhost', (err) => {
        if (err)
            throw new Error(err);
        console.log('Webpack-dev-server is running at port 8080.');
    });
});

//  生产环境生成build文件夹
gulp.task('webpack:build', (callback) => {
    webpack(prodConfig, (err, stats) => {
        if (err)
            throw new Error(err);
        console.log('Webpacked files in build filter.');
    });
});

//  打包dll文件
gulp.task('build-dll', (callback) => {
    webpack(dllConfig, (err, stats) => {
        if (err)
            throw new Error(err);
        console.log('Finished webpack dll file.')
    });
});

gulp.task('default', ['webpack:build']);

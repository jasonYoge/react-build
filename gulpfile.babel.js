import gulp from 'gulp';
import gutil from 'gulp-util';
import devConfig from './config/dev.js';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

gulp.task('webpack-dev-server', (callback) => {
    new WebpackDevServer(webpack(devConfig), {
        // contentBase: './src',
        // publicPath: '/build/'
    }).listen(8080, 'localhost', (err) => {
        if (err)
            console.log(err);
        console.log('webpack-dev-server is running at port 8080.');
    });
});

gulp.task('default', ['webpack-dev-server']);

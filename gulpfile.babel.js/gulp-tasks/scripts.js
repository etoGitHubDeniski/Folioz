'use strict';

import { paths, props } from '../config';
import { dest, src, task } from 'gulp';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

const webpackConfig = require('../../webpack.config');

webpackConfig.mode = props.production ? 'production' : 'development';
webpackConfig.devtool = props.production ? false : 'source-map';

task('scripts', () => {
  return src(paths.scripts.src)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpIf(props.production, rename(props.rename)))
    .pipe(dest(paths.scripts.dest));
});

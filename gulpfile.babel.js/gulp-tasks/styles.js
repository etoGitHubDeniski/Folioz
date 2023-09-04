'use strict';

import { paths, props } from '../config';
import { dest, src, task } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);

task('styles', () => {
  return src(paths.styles.src, { sourcemaps: !props.production })
    .pipe(sass(gulpIf(props.production, props.sass)).on('error', sass.logError))
    .pipe(gulpIf(props.production, rename(props.rename)))
    .pipe(dest(paths.styles.dest, { sourcemaps: '.' }));
});

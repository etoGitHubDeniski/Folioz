'use strict';

import { paths } from '../config';
import { dest, src, task } from 'gulp';

task('misc', () => {
  return src(paths.misc.src, { dot: true }).pipe(dest(paths.misc.dest));
});

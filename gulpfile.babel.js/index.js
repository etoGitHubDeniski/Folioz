'use strict';

import { parallel, series } from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp-tasks');

export const build = parallel(['views', 'styles', 'scripts', 'misc']);

export const dev = series(build, 'watch');

export default series('clean', build);

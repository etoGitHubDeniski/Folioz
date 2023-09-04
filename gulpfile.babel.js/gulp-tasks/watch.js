'use strict';

import { paths } from '../config';
import { parallel, task, watch } from 'gulp';

task('watch', () => {
  watch(paths.views.watch, parallel('views'));
  watch(paths.styles.watch, parallel('styles'));
  watch(paths.scripts.watch, parallel('scripts'));
  watch(paths.misc.watch, parallel('misc'));
});

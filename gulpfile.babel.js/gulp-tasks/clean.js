'use strict';

import { paths } from '../config';
import { task } from 'gulp';
import del from 'del';

task('clean', () => {
  return del(paths.root);
});

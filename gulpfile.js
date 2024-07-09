import gulp from 'gulp';

import {path} from "./gulp/config/path.js";


import {plugins} from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {html} from "./gulp/tasks/html.js";
import {reset} from "./gulp/tasks/reset.js";

function watcher() {
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.series(html);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);

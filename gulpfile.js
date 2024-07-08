import gulp from 'gulp';

import {path} from "./gulp/config/path.js";


import {plugins} from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {html} from "./gulp/tasks/html.js";

function watcher() {
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.series(html);

const dev = gulp.series(mainTasks, watcher);

gulp.task('default', dev);

import gulp from 'gulp';

import {path} from "./gulp/config/path.js";

import {plugins} from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {html} from "./gulp/tasks/html.js";
import {reset} from "./gulp/tasks/reset.js";
import {js} from "./gulp/tasks/js.js";

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.series(gulp.parallel(html, js));

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);

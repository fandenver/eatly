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
import {scss} from "./gulp/tasks/scss.js";
import {images} from "./gulp/tasks/images.js";

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.series(gulp.parallel(html, scss, js, images));

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);

import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/scripts/`,
        html: `${buildFolder}/html/`
    },
    src: {
        js: `${srcFolder}/scripts/*.js`,
        html: `${srcFolder}/*.html`
    },
    watch : {
        html: `${srcFolder}/**/*.html`,
        js: `${srcFolder}/**/*.js`
    },
    clean: `${buildFolder}`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
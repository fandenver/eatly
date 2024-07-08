import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${buildFolder}/html/`
    },
    src: {
        html: `${srcFolder}/*.html`
    },
    watch : {
        html: `${srcFolder}/*.html`
    },
    clean: `${buildFolder}/html/`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
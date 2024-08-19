import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/scripts/`,
        html: `${buildFolder}/html/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts`,
    },
    src: {
        js: `${srcFolder}/scripts/*.js`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/page.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    },
    watch : {
        html: `${srcFolder}/**/*.html`,
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    },
    clean: `${buildFolder}`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
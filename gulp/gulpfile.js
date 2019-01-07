'use strict';
/*
 *
 * Management Gulp file
 *
 * 
 * gulp.series - wykonywanie sekwencyjne, po kolei
 * gulp.parallel  - wykonywanie równoległe
 * Gulp version: 4
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var promise = require('es6-promise').polyfill();
var sass = require('gulp-sass');
var svgSprite = require('gulp-svg-sprite');
//var svgSprite = require('gulp-svg-sprites');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpMerge = require('gulp-merge');
var minify = require('gulp-minify');
var del = require('del');
let cleanCSS = require('gulp-clean-css');



//Deklaracja zmiennych
const assetsDir = "src/";
const assetsDist = '../';
//const assetsDist = '../../../bwcms/frontend/web/';


//Definicja tasków
gulp.task('clean', () => {
    //return del.sync('dist');
    return true
})


gulp.task('sprite', (done) => {

    const config = {
        mode: {
            css: {// Activate the «css» mode
                render: {
                    css: true // Activate CSS output (with default options)
                }
            }
        }
    };

    gulpMerge(
            gulp.src(assetsDist + 'images/ico/svg/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest(assetsDist))
            );
    done();
});



gulp.task('scss', (done) => {
    gulpMerge(
            gulp.src(assetsDir + 'scss/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(concat('style.css'))
            .pipe(gulp.dest(assetsDist + 'css'))
            );
    done();
});

gulp.task('js', (done) => {
    gulpMerge(
            gulp.src([assetsDir + 'js/plugins/*.js', assetsDir + 'js/main/*.js'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(concat('script.js'))
            .pipe(gulp.dest(assetsDist + 'js'))
            );
    done();
});

//// node_modules JS
gulp.task('js-library', (done) => {
    gulpMerge(
            gulp.src([
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/popper.js/dist/umd/popper.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
            ])
            .pipe(uglify())
            .pipe(concat('library.js'))
            .pipe(gulp.dest(assetsDist + 'js'))
            );
    done();
});
//// node_modules CSS
gulp.task('css-library', (done) => {
    gulpMerge(
            gulp.src([
                'node_modules/bootstrap/dist/css/bootstrap.css',
                'node_modules/slick-carousel/slick/slick.css',
            ])
            .pipe(concat('library.css'))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest(assetsDist + 'css'))
            );
    done();
});

gulp.task('hack', (done) => {
    gulpMerge(
            gulp.src(assetsDir + 'js/hack/*.js')
            .pipe(uglify())
            .pipe(concat('hack.js'))
            .pipe(gulp.dest(assetsDist + 'js'))
            );
    done();
});

//first developer task
gulp.task('first', gulp.series('scss', 'js', 'js-library', 'css-library', 'hack'));

// Watch files
function watchFiles() {
    gulp.watch([assetsDir + 'scss/**/*.scss', assetsDir + 'js/**/*.js'], gulp.parallel('scss', 'js'));
}
// watch
gulp.task("watch", gulp.parallel(watchFiles));
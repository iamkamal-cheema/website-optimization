"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
     del = require('del'),
 minHtml = require('gulp-minify-html'),
 ghPages = require('gulp-gh-pages'),
  minCss = require('gulp-minify-css');

gulp.task("concatScripts", function() {
    return gulp.src([
        'css/style.css',
        'css/print.css'
    ])
    .pipe(maps.init())
    .pipe(concat('style1.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css')),
    gulp.src([
        'css/pizzastyle.css',
        'css/bootstrap-grid.css'

    ])
    .pipe(maps.init())
    .pipe(concat('style2.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));

});

gulp.task("minifyhtml", function() {
   return gulp.src('*.html')
    .pipe(minHtml({ empty: true }))
    .pipe(gulp.dest('minHtml'));

});

gulp.task('minifycss',["concatScripts"], function () {
    return gulp.src('css/style1.css') // path to your file
    .pipe(minCss())
    .pipe(rename('style1.min.css'))
    .pipe(gulp.dest('css')),
    gulp.src('css/style2.css') // path to your file
    .pipe(minCss())
    .pipe(rename('style2.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task("minifyScripts", function() {
  return gulp.src("js/main.js")
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('js')),
    gulp.src("js/perfmatters.js")
    .pipe(uglify())
    .pipe(rename('perfmatters.min.js'))
    .pipe(gulp.dest('js'));
});


gulp.task('clean', function() {
  del(['dist', 'minHtml','css/style1.css','css/style2.css','css/*.min.*','css/style*.*.map','js/main.*.js','js/perfmatters.*.js']);
});

gulp.task("build", ["minifyhtml","minifycss","minifyScripts"], function() {
  return gulp.src(["css/style1.min.css","css/style2.min.css","js/main.min.js","js/perfmatters.min.js",
                   "img/**"], { base: './'})
            .pipe(gulp.dest('dist')),
         gulp.src(['minHtml/index.html','minHtml/pizza.html','minHtml/project-2048.html','minHtml/project-webperf.html',
          'minHtml/project-mobile.html'])
            .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function(){
  return gulp.src('dist/**/*')
  .pipe(ghPages());
});

gulp.task("default", ["build"]);

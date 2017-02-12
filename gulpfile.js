var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var pump = require('pump');

var paths = {
    css: ['node_modules/bulma/css/bulma.css', 'node_modules/font-awesome/css/font-awesome.min.css'],
    scripts: ['node_modules/vue/dist/vue.js'],
    fonts: ['node_modules/font-awesome/fonts/*.*']
};

gulp.task('default', function () {
    // Minify and copy all JavaScript (except vendor scripts)
    pump([
        gulp.src(paths.scripts),
        uglify(),
        gulp.dest('dist/js'),
        gulp.src(paths.css),
        csso(),
        gulp.dest('dist/css'),
    ]);
    pump([
        gulp.src(paths.fonts),
        gulp.dest('dist/fonts'),
    ]);
});

gulp.task('development', function () {
    pump([
        gulp.src(paths.scripts),
        uglify({
            beautify: true,
            bracketize: true,
            comments: true
        }),
        gulp.dest('dist/js'),
        gulp.src(paths.css),
        csso({
            restructure: true,
            sourceMap: true,
            debug: true
        }),
        gulp.dest('dist/css')
    ]);
});

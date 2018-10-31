var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify'); 
var imagemin = require('gulp-imagemin');

var paths = {
    src: {
        html: 'src/*.html',
        css: 'src/styles/style.scss',
        cssFonts: 'src/styles/fonts.css',
        script: 'src/scripts/script.js',
        font: 'src/fonts/**/*.*',
        image: 'src/images/**/*.*'
    },
    build: {
        css: 'build/styles',
        mincss: 'build/styles/mincss',
        script: 'build/scripts',
        font: 'build/fonts',
        image: 'build/images'
    }
};

gulp.task('build-css', function(){
    return gulp.src(paths.src.css)
        .pipe(autoprefixer())
        .pipe(sass())
	.pipe(minifyCss())
        .pipe(gulp.dest(paths.build.css))
        .pipe(notify('successfully compiled'));
});

gulp.task('build-html', function(){
  return gulp.src(paths.src.html)
        .pipe(gulp.dest('build'));
});

gulp.task('build-script', function(){
    return gulp.src(paths.src.script)
        //.pipe(uglify())
        .pipe(gulp.dest(paths.build.script));
});

gulp.task('build-img', function(){
    return gulp.src(paths.src.image)
        //.pipe(imagemin())
        .pipe(gulp.dest(paths.build.image));
});

gulp.task('build-font', function(){
    return gulp.src(paths.src.font)
        .pipe(gulp.dest(paths.build.font));
});

gulp.task('watcher', function(){
    gulp.watch(paths.src.html, ['build-html']); 
    gulp.watch(paths.src.css, ['build-css']);
    gulp.watch(paths.src.script, ['build-script']);
});

gulp.task('build', [
    'build-html',
    'build-css',
    'build-script',
    'build-img',
    'build-font',
]);

gulp.task('default', ['build']);
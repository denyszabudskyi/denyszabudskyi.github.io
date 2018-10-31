var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
        .pipe(browser.stream({match: '**/*.css'}));
});

// Builds the documentation and framework files
//gulp.task('build', ['clean', 'sass', 'javascript']);

// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
  browser.init({
	  	server: {
            baseDir: "build"
        }
  	});
});


gulp.task('image-min', function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}
);

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve'], function() {    
  gulp.watch(['src/sass/**/*.scss'], ['sass']);  
  gulp.watch('build/*.html').on('change', browser.reload);
});
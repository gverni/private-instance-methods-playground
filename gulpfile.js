const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

gulp.task('build', () =>
  gulp.src('./src/private-instance-methods.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
  .pipe(gulp.dest('dist'))
)

gulp.task('lint', () => {
  return gulp.src('./src/private-instance-methods.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

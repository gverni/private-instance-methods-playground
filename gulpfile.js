const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('build', () =>
  gulp.src('./src/private-instance-methods.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
  .pipe(gulp.dest('dist'))
)

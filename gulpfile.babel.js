import gulp from 'gulp'
import watch from 'gulp-watch'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssvars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssImport from 'postcss-import'

gulp.task('default', () => {
    console.log('Hooray - you created a Gulp task.')
})

gulp.task('html', () => {
    console.log('Imagine something useful being done to your HTML here.')
})

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', () => {

    watch('./app/index.html', () => {
        gulp.start('html')
    })

    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('styles')
    })
})
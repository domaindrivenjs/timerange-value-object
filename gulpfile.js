var gulp = require( 'gulp' );
var traceur = require( 'gulp-traceur' );
//var traceurOptions = require('./config').traceur;
//var connect = require('gulp-connect');
var clean = require( 'gulp-clean' );
//var requirejs   = require('requirejs');
var rename = require( 'gulp-rename' );
//var es = require('event-stream');
//var shell = require('gulp-shell')

gulp.task( 'clean', function(){
  gulp.src( ['./build/**/*.*', './dist/**/*.*'] )
    .pipe( clean() );
});

//gulp.task('transpile', ['clean'], shell.task('./node_modules/traceur/traceur --script index.js --out dist/transpiled-with-source-maps.js --sourcemap'));
//gulp.task('transpile', ['clean'], shell.task('traceur --script index.js --out dist/transpiled-with-source-maps.js --sourcemap'));

gulp.task( 'transpile', ['clean'], function () {
  return gulp.src( ['src/**/*.js', '!src/**/*spec.js'] )
    .pipe( traceur( { sourceMaps: true } ) )
//    .pipe( rename( function ( path ) {
//      path.extname = ".js"
//    }))
    .pipe( gulp.dest( 'build/traceur' ) );
});

//gulp.task('concatenate', ['transpile'], function() {
//  requirejs.optimize({
//    baseUrl : 'src',
//    mainConfigFile : 'src/runtime-config.js',
//    out : 'dist/build.js',
//    include: ['traceur', 'runtime-config'],
//    findNestedDependencies: true,
//    wrap: true,
//    name: '../bower_components/almond/almond',
//    preserveLicenseComments: false
//    });
//});

//gulp.task('build', ['clean', 'concatenate'], function() {
//    gulp.src('index-production.html')
//        .pipe(rename("index.html"))
//        .pipe(gulp.dest('dist'));
//});

gulp.task( 'watch', ['transpile'], function() {
  gulp.watch(
    ['src/**/*.js', '!src/**/*spec.js'],
    ['transpile']
  );
});
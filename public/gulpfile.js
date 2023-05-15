// Gulp setup
const gulp = require('gulp')
  ,phpConnect = require('gulp-connect-php')
  ,browserSync = require('browser-sync');

let connection = new phpConnect();

const url = "./index.html";

gulp.task('phpwebserver', () => {

  connection.server({ port: 5500 }, () => { 
    browserSync({
      "proxy": '127.0.0.1:5500',
      "browser": "opera",
      "cors": true,
      "files": ["./**/*.html", "./**/*.css", "./**/*.js"],
      "open": true,
      "startPath": url
    });
  });

  gulp.watch('./**/*.html').on('change', function () {
    browserSync.reload();
  });

  gulp.watch('./**/*.css').on('change', function () {
    browserSync.reload();
  });

  gulp.watch('./**/*.js').on('change', function () {
    browserSync.reload();
  })

});

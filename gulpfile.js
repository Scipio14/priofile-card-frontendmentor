const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css

function style() {
  //1. Where is my scss file
  return (
    gulp
      .src("./src/scss/**/*.scss")

      //2. Pass that file through sass compiler
      .pipe(sass())
      //3.Where do I save my compiled css?
      .pipe(gulp.dest("./src/css"))
      //4. Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
    port: 4000,
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./src/*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;

const { src, dest, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function task_html() {
  return src("app/html/*.html")
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}
exports.html = task_html;

function task_sass() {
  return src("app/scss/*.scss")
    .pipe(concat('styles.scss'))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}
exports.sass = task_sass;

function task_scripts() {
  return src("app/js/*.js")
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
}
exports.scripts = task_scripts;

function task_imgs() {
  return src("app/img/*.+(jpg|jpeg|png|gif)")
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true
    }))
    .pipe(dest("dist/images"))
    .pipe(browserSync.stream());
}
exports.imgs = task_imgs;

const lib_css_task = () => src('app/css/bootstrap.min.css')
  .pipe(dest('dist/css'));

const lib_js_task = () => src('app/js/bootstrap.min.js')
  .pipe(dest('dist/js'));

function task_copy_images() {
  return src("app/img/*.*")
    .pipe(dest("dist/images"));
}
exports.copy_images = task_copy_images;

function task_data_json() {
  return src("app/database/donut.json")
    .pipe(dest("dist"))
    .pipe(browserSync.stream()); // якщо ви використовуєте BrowserSync, оновіть сторінку
}
exports.data_json = task_data_json;


function task_watch() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  watch("app/html/*.html", task_html);
  watch("app/js/*.js", task_scripts);
  watch("app/scss/*.scss", task_sass);
  watch("app/images/*.+(jpg|jpeg|png|gif)", task_imgs);
}

exports.watch = task_watch;

exports.default = series(task_html, task_sass, task_scripts, task_imgs, lib_css_task, lib_js_task, task_copy_images, task_data_json, task_watch);
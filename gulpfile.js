function simpleTask(cb) {
    console.log('This is a test task!');
    cb();
  }
  exports.default = simpleTask

  
const { src, dest, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const imagemin = require('gulp-imagemin');



//копіювання HTML файлів в папку dist
function task_html () {
  return src("app/html/*.html")
  .pipe(dest("dist"));
}
exports.html = task_html

//об'єднання, компіляція Sass в CSS, додавання префіксів і подальша мінімалізація коду
function task_sass() {
  return src("app/scss/*.scss")
  .pipe(concat('styles.scss'))
  .pipe(sass())
  .pipe(autoprefixer ({
    cascade: false
  }))
  .pipe(cssnano())
  .pipe(rename({suffix:'.min'}))
  .pipe(dest("dist/css"));
} 
exports.sass = task_sass

//об'єднання і стискання JS-файлів
function task_scripts() {
  return src("app/js/*.js")//вихідна директорія файлів
  .pipe(concat('scripts.js'))//конкатенація js-файлів в один
  .pipe(uglify())//стиснення коду
  .pipe(rename({suffix:'.min'}))//перейменування файлу з приставкою .min
  .pipe(dest("dist/js"));//директорія продакшена
}
exports.scripts = task_scripts

//стискання зображень
function task_imgs() {
  return src("app/img/*.+(jpg|jpeg|png|gif)")
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    interlaced: true
  }))
  .pipe(dest("dist/images"))
}

const lib_css_task = () => src('app/css/bootstrap.min.css')
  .pipe(dest('dist/css'));

const lib_js_task = () => src('app/js/bootstrap.min.js')
  .pipe(dest('dist/js'));

exports.imgs = task_imgs

//відстежування за змінами у файлах
function task_watch() {
  watch("app/html/*.html",task_html);
  watch("app/js/*.js",task_scripts);
  watch("app/scss/*.scss",task_sass);
  watch("app/images/*.+(jpg|jpeg|png|gif)",task_imgs);
}
exports.watch = task_watch


//запуск тасків за замовчуванням

exports.default = series(task_html,task_sass,task_scripts,lib_css_task,lib_js_task,task_imgs,task_watch); // GULPFILE


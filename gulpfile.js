const {task, series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const sortCSSmq = require('sort-css-media-queries');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css')
const fileinclude = require('gulp-file-include');

const path = {
  scssFolder: './assets/scss/',
  scssFiles: './assets/scss/**/*.scss',
  scssFile: './assets/scss/style.scss',
  cssFolder: './assets/css/',
  cssFile: './assets/css/style.css',
  htmlFiles: './*.html',
  jsFiles: './assets/js/**/*.js',
  jsFolder: './assets/js/',
  libsFolder: './libs/',
  htmlTemplateAll: './assets/html/*.html',
  htmlTemplate: './assets/html/[^_]*.html',
};

const plugins = [
  autoprefixer({
    overrideBrowserslist: [
      'last 5 versions',
      '> 1%'
    ],
    cascade: true
  }),
  mqpacker({sort: sortCSSmq})
];

task('bootstrap', function() {
  return src('./node_modules/bootstrap/dist/**/*').pipe(dest(path.libsFolder + 'bootstrap'));
});

task('js-concat', function() {
  return src([
      path.libsFolder + 'bootstrap/js/bootstrap.bundle.min.js',
  ])
    .pipe(concat('app.js'))
    .pipe(dest(path.jsFolder));
});

function html() {
  return src(path.htmlTemplate).
  pipe(fileinclude({
    prefix: '@@',
    basepath: '@file',
  })).
  pipe(dest('./')).
  pipe(notify({
    message: 'Compiled html fileinclude!',
    sound: false
  })).
  pipe(browserSync.reload({stream: true}));
}

function scss() {
  return src(path.scssFile).
    pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)).
    pipe(postcss(plugins)).
    pipe(cleanCss()).
    pipe(dest(path.cssFolder)).
    pipe(notify({
      message: 'Compiled!',
      sound: false
    })).
    pipe(browserSync.reload({stream: true}));
}

function comb() {
  return src(path.scssFiles).
    pipe(csscomb()).
    on('error', notify.onError((error) => `File: ${error.message}`)).
    pipe(dest(path.scssFolder));
}

function syncInit() {
  browserSync({
    server: {baseDir: './'},
    notify: false
  });
}

async function sync() {
  browserSync.reload();
}

function watchFiles() {
  syncInit();
  watch(path.htmlTemplateAll, series(html));
  watch(path.scssFiles, series(scss));
  watch(path.htmlFiles, sync);
  watch(path.jsFiles, sync);
}

task('comb', series(comb));
task('scss', series(scss));
task('html', series(html));
task('lib', series('bootstrap', 'js-concat'));
task('watch', watchFiles);

const elixir = require('laravel-elixir');
const gulp = require('gulp');

elixir((mix) => {
	mix.sass('./resources/css/app.scss', './public/css/')
		.webpack('./resources/js/app.js', './public/js/')
		.task('sw')
		.browserSync({
			proxy: 'localhost:5000',
			notify: false
		})
});

// service worker generator
gulp.task('sw', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});

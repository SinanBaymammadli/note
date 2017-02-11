const elixir = require('laravel-elixir');

elixir((mix) => {
	mix.sass('./resources/css/app.scss', './public/css/')
		.webpack('./resources/js/app.js', './public/js/')
		.browserSync({
			proxy: 'localhost:5000',
			notify: false
		})
});

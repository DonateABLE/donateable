let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
    .babel('resources/assets/js/donate.js', 'public/js/donate.js')
    .babel('resources/assets/js/contactUs.js', 'public/js/contactUs.js')
    .babel('resources/assets/js/singlepage.js', 'public/js/singlepage.js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/tabbedNavigation.scss', 'public/css');

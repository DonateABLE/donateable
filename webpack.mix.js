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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    .babel('resources/assets/js/profilePage.js', 'public/js/profilepage.js')
>>>>>>> f85af1e... Filename cleanup and fix username validation
=======
    .babel('resources/assets/js/profilePage.js', 'public/js/profilePage.js')
>>>>>>> 1da5e1cdce70713ca486783738fa18ae089395d2
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/tabbedNavigation.scss', 'public/css')
    .sass('resources/assets/sass/profilePage.scss', 'public/css');

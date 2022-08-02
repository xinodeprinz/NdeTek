const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.alias("~", path.resolve("node_modules"))
    .js("resources/js/app.jsx", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .react()
    .disableNotifications();

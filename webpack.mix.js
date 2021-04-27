const mix = require('laravel-mix');

mix.postCss('css/app.css', 'public/css', [
    require('tailwindcss')
]);
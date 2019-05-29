const Dotenv = require('dotenv-webpack');
const tailwindcss = require('tailwindcss');
const mix = require('laravel-mix');
const path = require('path');

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

mix.js('resources/ts/app.ts', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss()],
    })
    .browserSync({
        proxy: process.env.APP_URL,
        notify: false
    })
    .webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
            ]
        },

        resolve: {
            alias: {
                '@': path.resolve('resources/ts'),
                'sass': path.resolve('resources/sass'),
            },
            extensions: ['.tsx', '.ts'],
        },

        plugins: [
            new Dotenv()
        ],
    })
    .version()
    .extract();

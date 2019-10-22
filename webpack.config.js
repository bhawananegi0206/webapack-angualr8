const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const I18nPlugin = require('i18n-webpack-plugin');

const inline_locale = {
    en: {
        animals: {
            hedgehog: 'hedgehog is a bunny',
            walrus: 'walrus'
        }
    },
    de: {
        animals: {
            hedgehog: 'jeż',
            walrus: 'mors'
        }
    }
}
module.exports = {
    entry: ['./src/main.ts', './scss/main.scss'],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src/app/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css/,
                use: ['css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            // workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
            {
                test: /[\/\\]@angular[\/\\].+\.js$/,
                parser: { system: true }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.DefinePlugin({
            // global app config object
            config: JSON.stringify({
                apiUrl: 'http://localhost:4000'
            })
        }),

        // workaround for warning: Critical dependency: the request of a dependency is an expression
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)fesm5/,
            path.resolve(__dirname, 'src')
        ),
        new I18nPlugin(inline_locale, {
            nested: true //allows for nesting locale keys like
          })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true
    },
    devServer: {
        historyApiFallback: true
    }
}
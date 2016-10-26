var isProduction = process.env.NODE_ENV === 'production';
var path = require('path');
var webpack = require('webpack');
var SplitByPathPlugin = require('webpack-split-by-path');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

var plugins = [
    new ExtractTextPlugin(isProduction ? '[name]-[hash].css' : '[name].css'),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new SplitByPathPlugin([{
        name: 'vendor',
        path: /(?=node_modules)((?!default-theme.css).)*$/
    }]),
    new AssetsPlugin({
        filename: 'assets.json',
        path: path.join(__dirname, 'dist')
    })
];

if (isProduction) {
    plugins = plugins.concat([
        new WebpackCleanupPlugin({
            exclude: ['assets.json']
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            __SERVER__: !isProduction,
            __DEVELOPMENT__: !isProduction,
            __DEVTOOLS__: !isProduction,
            'process.env': {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]);
}

module.exports = {
    context: path.join(__dirname),
    entry: {
        app: './src/app'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: isProduction ? '[name]-[hash].js' : '[name].js'
    },
    debug: !isProduction,
    devtool: isProduction ? false : 'eval',
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(ttf|eot)/,
            loader: 'file-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(woff2?|svg|png|gif|jpg)/,
            loader: 'url-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.po$/,
            loader: 'json!angular-gettext-loader?format=json'
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015',
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules', 'openprovider')]
        }]
    },
    htmlLoader: {
        minimize: false
    },
    eslint: {
        failOnError: isProduction
    },
    plugins: plugins,
    resolve: {
        alias: {
            jquery: path.join(__dirname, 'node_modules/jquery/dist/jquery.js')
        }
    },
    resolveLoader: {
        modulesDirectories: [path.join(__dirname, 'node_modules')]
    }
};

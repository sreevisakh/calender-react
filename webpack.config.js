var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        sourceMapFilename: "[file].map"
    },
    devServer: {
        contentBase: __dirname + '/public',
        host: '0.0.0.0',
        port: 8000,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        }
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.ts?$/,
            loader: "ts-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', "react"],
                retainLines: true
            }
        }]
    }
};

module.exports = config;

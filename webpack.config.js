let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './consultaCEP.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'consultaCEP.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

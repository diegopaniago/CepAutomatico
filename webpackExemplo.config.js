let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './exemplo.js',
    output: {
        path: path.resolve(__dirname, './distExemplo'),
        filename: 'exemplo.js'
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
};

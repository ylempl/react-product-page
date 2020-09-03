const path = require('path');

module.exports = {
    stats: {
        children: false,
        colors: true
    },
    optimization: {
        usedExports: true
    },
    entry: {
        App: './src/index.js',
    },
    output: {
        publicPath: './../build-webpack/assets/js/',
        path: path.resolve(__dirname, './../build-webpack/assets/js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
        alias: {
            '@components': path.resolve(__dirname, './../src/components'),
            '@consts': path.resolve(__dirname, './../src/consts')
        }
    },
    node: {
        fs: 'empty'
    }
};

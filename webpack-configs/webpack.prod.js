const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            sourceMap: true
        })]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
});

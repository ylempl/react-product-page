const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'cheap-module-eval-source-map',
    watchOptions: {
        poll: true
    },
    plugins: [
        new BrowserSyncPlugin({
            open: false,
            proxy: 'app.local',
            host: '127.0.0.1'
        })
    ]
});

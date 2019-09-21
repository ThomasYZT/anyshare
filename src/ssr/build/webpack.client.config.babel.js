import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config.babel.js';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';

module.exports = merge(baseConfig, {
    entry : path.resolve(__dirname, '../entry-client.js'),
    plugins : [
        // 此插件在输出目录中
        // 生成 `vue-ssr-manifest.json`。
        new VueSSRClientPlugin(),
        new webpack.optimize.RuntimeChunkPlugin({
            name : 'manifest',
        }),
    ]
});

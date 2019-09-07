import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config.babel.js';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';

module.exports = merge(baseConfig, {
    entry : path.resolve(__dirname, '../entry-client.js'),
    optimization : {

        // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
        // 以便可以在之后正确注入异步 chunk。
        // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
        splitChunks : {
            name : 'manifest',
            minChunks : Infinity
        }
    },
    plugins : [
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin()
    ]
});

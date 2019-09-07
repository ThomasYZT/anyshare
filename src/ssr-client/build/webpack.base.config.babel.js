import path from 'path';
import webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isProd = process.env.NODE_ENV === 'production';
export default {
    devtool : isProd ? false : '#source-map',
    output : {
        path : path.resolve(__dirname, '../../../dist_ssr'),
        publicPath : '/dist/',
        filename : '[name].[chunkhash].js'
    },
    resolve : {
        alias : {
            'static' : path.resolve(__dirname, '../static')
        }
    },
    module : {
        noParse : /es6-promise\.js$/, // avoid webpack shimming process
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    compilerOptions : {
                        preserveWhitespace : false
                    }
                }
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'url-loader',
                options : {
                    limit : 10000,
                    name : '[name].[ext]?[hash]'
                }
            },
            {
                test : /\.styl(us)?$/,
                use : isProd ? [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath : '../'
                        }
                    },
                    'stylus-loader'
                ] : ['vue-style-loader', 'css-loader', 'stylus-loader']
            },
        ]
    },
    performance : {
        hints : false
    },
    plugins : isProd ? [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            filename : 'common.[chunkhash].css'
        })
    ] : [
        new VueLoaderPlugin(),
        new FriendlyErrorsPlugin()
    ]
};

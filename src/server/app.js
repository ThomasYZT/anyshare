import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import rooteBootstrap from './routes';
import middlewareMount from './middlewares';
import db from './models/db';

let app = express();

//启动动态路由配置
rooteBootstrap(app);

//挂载中间件
middlewareMount(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());
console.log(path.join(__dirname, '../../dist_ssr'));
app.use('/dist', express.static(path.resolve(__dirname, '../../dist_ssr'), {
    maxAge : 1000 * 60 * 60 * 24 * 30
}));

module.exports = app;

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import rooteBootstrap from './routes';
import middlewareLoader from './middlewares';
import db from './models/db';

let app = express();

//启动动态路由配置
rooteBootstrap(app);
middlewareLoader(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());

module.exports = app;

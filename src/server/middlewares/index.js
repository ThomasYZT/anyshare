import path from 'path';
import { walkFile } from '../lib/walkFile';
/**
 * 中间件加载器
 * @param {object} app
 * @return {undefined}
 */
const middlewareLoader = (app) => {
    const appRoot = process.cwd();
    const root = path.resolve(appRoot, 'src/server');
    const reg = new RegExp('(.*)middleware.js$', 'i');
    //动态挂载中间件
    walkFile({
        root : root,
        targetFolder : 'middlewares',
        reg : reg,
        callback : (route) => {
            import(route).then(({ default : defaultModule }) => {
                app.use(defaultModule());
            });
        }
    });
};

export default middlewareLoader;

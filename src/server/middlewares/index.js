import path from 'path';
import { walkFile } from '../lib/walkFile';
/**
 * 中间件加载器
 * @param {object} app
 * @return {undefined}
 */
const middlewareMount = (app) => {
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
                let config = defaultModule();
                app.use(config.path ? config.path : '/', config['middleware']);
            });
        }
    });
};

export default middlewareMount;

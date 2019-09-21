import path from 'path';
import { walkFile } from '../lib/walkFile';

const routerBootsstrap = (app) => {
    const appRoot = process.cwd();
    const root = path.resolve(appRoot, 'src/server');
    const reg = new RegExp('(.*)route.js$', 'i');
    //动态装载route
    walkFile({
        root : root,
        reg : reg,
        callback : (route) => {
            import(route).then(({ default : defaultModule }) => {
                app.use(defaultModule);
                console.log(route + ' has been loaded');
            });
        }
    });
};

export default routerBootsstrap;

import express from 'express';
import fs from 'fs';
import { resolve } from '../../lib/toolKit';
import { createBundleRenderer } from 'vue-server-renderer';
import microCache from 'route-cache';

let router = express.Router();
let renderer = createRenderer();

router.use(microCache.cacheSeconds(1, req => req.originalUrl));
router.get(/^((?!api).)*$/, render);

export default router;

/**
 * 执行服务端渲染包
 * @return {object}
 */
function createRenderer () {
    const config = getRenderConfig();

    return createBundleRenderer(config.serverBundle, Object.assign({
        template : config.template,
        clientManifest : config.clientManifest
    }, {
        // for component caching
        /*cache : new LRU({
            max : 1000,
            maxAge : 1000 * 60 * 15
        }),*/
        // this is only needed when vue-server-renderer is npm-linked
        // basedir : path.resolve(__dirname, '../../../dist_ssr'),
        // recommended for performance
        runInNewContext : false
    }));
}

/**
 * 获取渲染参数
 * @return {object}
 */
function getRenderConfig () {
    const templatePath = resolve('../../../dist_ssr/templates/index.common.html');
    const serverBundle = require(resolve('../../../dist_ssr/vue-ssr-server-bundle.json'));
    const clientManifest = require(resolve('../../../dist_ssr/vue-ssr-client-manifest.json'));

    return {
        serverBundle : serverBundle,
        clientManifest : clientManifest,
        template : fs.readFileSync(templatePath, 'utf-8')
    };
}

/**
 * 渲染函数
 * @param {object} req
 * @param {object} res
 * @return {undefined}
 */
function render (req, res) {
    res.setHeader('Content-Type', 'text/html');

    const handleError = err => {
        if (err.url) {
            res.redirect(err.url);
        } else if(err.code === 404) {
            res.status(404).send('404 | Page Not Found');
        } else {
            // Render Error Page or Redirect
            res.status(500).send('500 | Internal Server Error');
            console.error(`error during render : ${req.url}`);
            console.error(err.stack);
        }
    };

    const context = {
        title : 'Vue HN 2.0', // default title
        url : req.url
    };
    renderer.renderToString(context, (err, html) => {
        console.log(html);
        if (err) {
            return handleError(err);
        }
        res.send(html);
    });
}

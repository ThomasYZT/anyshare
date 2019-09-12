import express from 'express';
import path from 'path';
import fs from 'fs';
import LRU from 'lru-cache';
import { createBundleRenderer } from 'vue-server-renderer';
let router = express.Router();

const templatePath = path.resolve(__dirname, '../../../ssr-client/templates/index.common.html');
const template = fs.readFileSync(templatePath, 'utf-8');
const bundle = require(path.resolve(__dirname, '../../../../dist_ssr/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, '../../../../dist_ssr/vue-ssr-client-manifest.json'));

let renderer = createRenderer(bundle, {
    template,
    clientManifest
});

function createRenderer (bundle, options) {
    // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
    return createBundleRenderer(bundle, Object.assign(options, {
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

function render (req, res) {
    console.log('1111111111111');
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
/* GET users listing. */
router.get(/^((?!api).)*$/, render);
console.log('page route has been boot');

export default router;

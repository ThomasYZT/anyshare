import Vue from 'vue';
import vueServerRenderer from 'vue-server-renderer';
const renderer = vueServerRenderer.createRenderer();
let app = new Vue({
    template : `<div>Hello World</div>`
});

renderer.renderToString(app, (err, html) => {
    if (err) throw err;
    console.log(html);
});

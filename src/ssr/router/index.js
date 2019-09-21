import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode : 'history',
        routes : [
            {
                path : '/helloWorld',
                component : () => import('../components/HelloWorld/index.vue')
            }
        ]
    });
}

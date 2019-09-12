import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld/index.vue';

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode : 'history',
        routes : [
            {
                path : '/helloWorld',
                component : HelloWorld
            }
        ]
    });
}

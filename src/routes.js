import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/test.vue'
import Login2 from './components/test2.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        { path: '/2', component: Login2 },
        { path: '*', redirect: '/' }
    ]
});

export default router
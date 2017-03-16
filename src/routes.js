import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/customer/Home.vue'
import Fish from './components/customer/mainTabs/Fish.vue'
import Shrimp from './components/customer/mainTabs/Shrimp.vue'
import Gadget from './components/customer/mainTabs/Gadget.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/fish', component: Fish },
        { path: '/shrimp', component: Shrimp },
        { path: '/gadget', component: Gadget },
    ]
});

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import All from './components/customer/mainTabs/All.vue'
import Fish from './components/customer/mainTabs/Fish.vue'
import Shrimp from './components/customer/mainTabs/Shrimp.vue'
import Gadget from './components/customer/mainTabs/Gadget.vue'
import WaterTree from './components/customer/mainTabs/WaterTree.vue'
import ShowItem from './components/customer/ShowItem.vue'
import ShowCard from './components/customer/Card.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: All },
        { 
            path: '/fish',
            component: Fish,
            children: [
                { 
                    name: 'route-show-fish-of-type',
                    path: ':typeFish',
                    component: ShowCard,            
                },
                { 
                    path: '*/:id',
                    component: ShowItem,            
                }
            ],
        },
        { 
            path: '/shrimp', 
            component: Shrimp,
            children: [
                { path: ':id', component: Shrimp }
            ],
        },
        { 
            path: '/water-tree',
            component: WaterTree,
            children: [
                { path: ':id', component: WaterTree }
            ],
        },
        { 
            path: '/gadget',
            component: Gadget,
            children: [
                { path: ':id', component: Gadget }
            ],
        },
        // { path: '*', redirect: '/' },
    ]
});

export default router
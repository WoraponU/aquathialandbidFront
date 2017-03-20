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
        { 
            path: '/fish',
            component: Fish,
            children: [
                { 
                    name: 'route-show-fish-of-type',
                    path: ':type',
                    component: ShowCard,            
                },
                { 
                    path: '*/:id',
                    component: ShowItem,            
                },
            ],
        },
        { 
            path: '/shrimp', 
            component: Shrimp,
            children: [
                { 
                    name: 'route-show-shrimp-of-type',
                    path: ':type',
                    component: ShowCard,            
                },
                { 
                    path: '*/:id',
                    component: ShowItem,            
                }
            ],
        },
        { 
            path: '/water-tree',
            component: WaterTree,
            children: [
                { 
                    name: 'route-show-water-tree-of-type',
                    path: ':type',
                    component: ShowCard,            
                },
                { 
                    path: '*/:id',
                    component: ShowItem,            
                }
            ],
        },
        { 
            path: '/gadget',
            component: Gadget,
            children: [
                { 
                    name: 'route-show-gadget-of-type',
                    path: ':type',
                    component: ShowCard,            
                },
                { 
                    path: '*/:id',
                    component: ShowItem,            
                }
            ],
        },
        {   
            path: '/',
            component: All,
            children: [
                { 
                    name: 'route-show-all',
                    path: '',
                    component: ShowCard,            
                }
            ],
        },
        // { path: '*', redirect: '/' },
    ]
});

export default router
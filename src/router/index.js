import Vue from 'vue'
import VueRouter from 'vue-router'

//views
import Home from '../components/views/Home.vue'
import Products from '../components/views/Products.vue'
import H4Pay from '../components/views/products/H4Pay.vue'
import Employee from '../components/views/Employee.vue'
import News from '../components/views/News.vue'
import Plan from '../components/views/Plan.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/product',
        name: 'product',
        component: Products,
        children: [
            {
                path: 'h4pay',
                name: 'h4pay',
                component: H4Pay
            },
        ]
    },
    {
        path: '/employee',
        name: 'employee',
        component: Employee
    },
    {
        path: '/plan',
        name: 'plan',
        component: Plan
    },
    {
        path: '/news',
        name: 'news',
        component: News
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

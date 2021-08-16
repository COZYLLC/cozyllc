import Vue from 'vue'
import VueRouter from 'vue-router'

//views
import Home from '../components/views/Home.vue'
import H4Pay from '../components/views/H4Pay.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/h4pay',
        name: 'h4pay',
        component: H4Pay
    },
    {
        path: '/',
        name: 'home',
        component: Home
    }

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

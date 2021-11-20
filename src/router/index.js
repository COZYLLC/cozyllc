import Vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../components/views/Home.vue";
import H4Pay from "../components/views/products/H4Pay.vue";
import NotFound from "../components/views/NotFound.vue";

//views_Introduction
import Plan from "../components/views/Introduction/Plan.vue";
import Employee from "../components/views/Introduction/Employee.vue";
import Welcome from "@/components/views/Introduction/Welcome.vue";
import View_History from "@/components/views/Introduction/History.vue";

//views_news
import Notice from "@/components/views/News/Notice.vue";

//Post Detail
import PostDetail from "@/components/Board/PostDetail.vue";

Vue.use(VueRouter);
const introductionRoutes = [
  {
    path: "/employee",
    name: "employee",
    component: Employee,
  },
  {
    path: "/plan",
    name: "plan",
    component: Plan,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/history",
    name: "history",
    component: View_History,
  },
];

const productRoutes = [
  {
    path: "/product/h4pay",
    name: "h4pay",
    component: H4Pay,
  },
];

const newsRoutes = [
  {
    path: "/notice",
    name: "notice",
    component: Notice,
  },
];
const notFoundHandlingRoutes = [
  {
    path: "*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: NotFound,
  },
];

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  ...productRoutes,
  ...introductionRoutes,
  ...newsRoutes,
  ...notFoundHandlingRoutes,
  {
    path: "/post/:category/:id",
    name: "postDetail",
    component: PostDetail,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

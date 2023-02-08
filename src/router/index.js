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
import Character from "@/components/views/Introduction/Character.vue";

//views_news
import Notice from "@/components/views/News/Notice.vue";
import Article from "@/components/views/News/Article.vue";

//Post Detail
import PostDetail from "@/components/Board/PostDetail.vue";

import Unsubscribe from "@/components/views/Unsubscribe.vue";

//Support
import Enquiry from "@/components/views/Support/enquiry.vue";
import Education from "@/components/views/Support/education.vue";
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
  {
    path: "/character",
    name: "character",
    component: Character,
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
  {
    path: "/article",
    name: "article",
    component: Article,
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

const supportRoutes = [
  {
    path: "/support",
    name: "Support",
    component: Enquiry,
  },
  {
    path: "/support/education",
    name: "Education",
    component: Education,
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
  ...supportRoutes,
  {
    path: "/newsletter/unsubscribe/:email",
    name: "Unsubscribe",
    component: Unsubscribe,
    props: true,
  },
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

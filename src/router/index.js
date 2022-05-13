import { createRouter, createWebHistory } from "vue-router";
import MainTitle from "../views/MainTitle.vue";

const routes = [
  {
    path: "/",
    name: "MainTitle",
    component: MainTitle
  },
  {
    path: "/situp",
    name: "SitUp",
    component: () => import("../views/SitUp.vue")
  },
  {
    path: "/option",
    name: "Option",
    component: () => import("../views/Option.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta:{
      requireAuth:true
    }
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta:{
      requireAuth:true
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

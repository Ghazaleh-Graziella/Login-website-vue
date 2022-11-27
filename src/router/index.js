import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import { auth } from "@/firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }
  if (
    to.matched.some((record) => record.meta.requireAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }
  next();
});

export default router;

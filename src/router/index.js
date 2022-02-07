import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/functional/Home";
import Partners from "../components/functional/Partners";
import talk from "../components/functional/talk";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/partners",
    name: "Partners",
    component: Partners,
  },

  {
    path: "/talkWithUs",
    name: "talk",
    component: talk,
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

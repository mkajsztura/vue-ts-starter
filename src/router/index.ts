import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/home.component.vue";
import UserDetailComponent from "@/components/user-details/user-details.component.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: UserDetailComponent
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

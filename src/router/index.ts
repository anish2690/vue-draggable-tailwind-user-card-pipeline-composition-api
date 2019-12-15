import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/userlist",
    name: "user-list",
    component: () => import("@/views/UserList.vue")
  },
  {
    path: "/pipleline",
    name: "pipleline",
    component: () => import("@/views/Pipeline.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

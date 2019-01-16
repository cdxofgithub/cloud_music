import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/home"),
      children: [
        {
          path: "",
          redirect: "recommend"
        },
        {
          path: "recommend",
          name: "recommend",
          meta: {
            keepAlive: true
          },
          component: () => import("@/views/recommend")
        },
        {
          path: "friend",
          name: "friend",
          meta: {
            keepAlive: true
          },
          component: () => import("@/views/friend")
        },
        {
          path: "station",
          name: "station",
          meta: {
            keepAlive: true
          },
          component: () => import("@/views/station")
        }
      ]
    },
    {
      path: "/playList",
      name: "playList",
      meta: {
        keepAlive: false
      },
      component: () => import("@/views/playList")
    }
  ]
});

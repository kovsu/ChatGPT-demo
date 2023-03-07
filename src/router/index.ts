import { createRouter, createWebHashHistory } from "vue-router";

export const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/list",
    },
    {
      path: "/list",
      component: () => import("../views/ChatList.vue"),
    },
    {
      path: "/chat/:id",
      component: () => import("../views/Chat.vue"),
    },
  ],
});

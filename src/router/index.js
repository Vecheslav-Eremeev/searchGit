import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "users",
        name: "Users",
        component: () => import("../views/SearchUsers.vue"),
      },
      {
        path: "repositories",
        name: "Repositories",
        component: () => import("../views/SearchRepositories.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

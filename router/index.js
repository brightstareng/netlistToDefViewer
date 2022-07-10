import { createRouter, createWebHistory } from "vue-router";
import tables from "../src/pages/tables.vue";
import Home from "../src/components/Home.vue";
import admin from "../src/pages/admin.vue";
import error from "../src/pages/error.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/vehicle/:vehicle",
      component: tables
    },
    { path: "/admin", component: admin },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: error }
  ]
});

export default router;

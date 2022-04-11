import { createRouter, createWebHistory } from "vue-router";
import tables from "../src/pages/tables.vue";
import Home from "../src/components/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/:vehicle", component: tables }
  ]
});

export default router;

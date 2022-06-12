import { createRouter, createWebHistory } from "vue-router";
import Email from "../components/Email.vue";
import Home from "../components/Home.vue";

const routes = [
  { path: "/section1", name: "Home", component: Home },
  { path: "/email", name: "Email", component: Email },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

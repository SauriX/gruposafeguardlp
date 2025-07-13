import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ChildBrandPage from "../views/ChildBrandPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/:brandName", // Ruta dinámica para las páginas hijas
    name: "ChildBrand",
    component: ChildBrandPage,
    props: true, // Esto permite pasar los parámetros de la ruta como props al componente
  },
  {
    path: "/:brandName/about",
    name: "AboutBrand",
    component: () => import("@/views/AboutUs.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

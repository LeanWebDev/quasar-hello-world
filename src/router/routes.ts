import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "index", component: () => import("pages/Index.vue") },
      {
        path: "/first-page",
        name: "first-page",
        component: () => import("pages/MyNewPage.vue")
      },
      {
        path: "/breaking-bad",
        name: "breaking-bad",
        component: () => import("pages/bbad.vue")
      },
      {
        path: "/to-do",
        name: "to-do",
        component: () => import("pages/PagesToDo.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;

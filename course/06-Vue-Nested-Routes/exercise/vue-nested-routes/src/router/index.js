import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Guide from "../views/About/Guide.vue";
import Changelog from "../views/About/Changelog.vue";
import GitHub from "../views/About/GitHub.vue";
import Reference from "../views/About/Reference.vue";
import index from "../views/About/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => About,
    children: [
      {
        path: "/about/index",
        name: "aboutindex",
        component: index,
      },
      {
        path: "/about/guide",
        name: "aboutGuide",
        component: Guide,
      },
      {
        path: "/about/changelog",
        name: "aboutChangelog",
        component: Changelog,
      },
      {
        path: "/about/gitHub",
        name: "aboutGitHub",
        component: GitHub,
      },
      {
        path: "/about/reference",
        name: "aboutReference",
        component: Reference,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

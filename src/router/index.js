import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetail from "../views/MovieDetail.vue";
import RelatedVideoDetail from "../views/RelatedVideoDetail.vue";
import SearchResult from "../views/SearchResult.vue";
import Search2 from "../views/Search2.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/moviedetail/:videoId",
    name: "movie",
    component: MovieDetail,
  },
  {
    path: "/relatedvideodetail/:videoId",
    name: "relatedVideo",
    component: RelatedVideoDetail,
  },
  {
    path: "/search/searchResult",
    name: "search",
    component: SearchResult,
  },
  {
    path: "/search",
    name: "search2",
    component: Search2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

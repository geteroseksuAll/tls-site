import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import FeedbackPage from "@/pages/FeedbackPage.vue";
import EducationPage from "@/pages/EducationPage.vue";
const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/feedback",
    component: FeedbackPage,
  },
  { path: "/our-learning", component: EducationPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;

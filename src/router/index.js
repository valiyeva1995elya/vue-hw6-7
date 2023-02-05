import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import Gallery from "@/components/Gallery.vue";
import Contacts from "@/components/Contacts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/first',
      component: HomePage
    },
    {
      path: '/second',
      component: Gallery,
    },
    {
      path: '/third',
      component: Contacts,
    }
  ]
})

export default router

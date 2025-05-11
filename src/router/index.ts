import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomePage.vue'),
    },
    {
      path: '/repositories',
      name: 'repository',
      component: () => import('@/pages/repository/RepositoryPage.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import usView from '@/views/usView.vue'
import contact from '@/views/contact.vue'
import proyects from '@/views/projectsMainView.vue'
import proyectsDetails from '@/views/projectView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: usView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: proyects,
    },
    {
      path: '/proyectos/:id',
      name: 'proyect',
      component: proyectsDetails,
      props: true
    },
  ],
})

export default router

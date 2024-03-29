import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlenderArtworkView from '@/views/BlenderArtworkView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import ProceduralArtworkView from '@/views/ProceduralArtworkView.vue'
import ContactFormView from '@/views/ContactFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/blender-artwork',
      name: 'blender-artwork',
      component: BlenderArtworkView
    }, 
    {
      path: '/procedural-artwork',
      name: 'procedural-artwork',
      component: ProceduralArtworkView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactFormView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFoundView
    }
  ]
})

export default router

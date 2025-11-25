import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalVue from '@/modulos/principal/personal/personal/vistas/personalVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //{
    //  path: '/',
    //  name: 'home',
    //  component: HomeView,
    //},
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue
    }
  ]
})
export default router

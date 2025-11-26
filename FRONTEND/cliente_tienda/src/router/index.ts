import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
=======
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
>>>>>>> 3f63887fc7fb2e684c81b605cd2e1b3d2ebdb7e2
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue
    }
<<<<<<< HEAD
  ],
=======
  ]
>>>>>>> 3f63887fc7fb2e684c81b605cd2e1b3d2ebdb7e2
})
export default router

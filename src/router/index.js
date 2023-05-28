import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      name: 'front',
      path: '/',
      component: import('../views/layout/frontLayout.vue'),
      redirect: '/welcome',
      children: [
        {
          name: 'welcome',
          path: '/welcome',
          component: import('../views/pages/frontend/welcomePage/welcomePage.vue')
        },
        {
          name: 'adout',
          path: '/adout',
          component: import('../views/pages/frontend/welcomePage/aboutUs.vue')
        },
        {
          name: 'help',
          path: '/help',
          component: import('../views/pages/frontend/welcomePage/helpPage.vue')
        },
        {
          name: 'ticket',
          path: '/ticket',
          component: import('../views/pages/frontend/welcomePage/ticketPage.vue')
        }
      ]
    },
    {
      name: 'adminPanel',
      path: '/admin',
      component: import('../views/layout/adminLayout.vue'),
      redirect: '/admin/dashboard',
      children: [
        {
          name: 'dashboard',
          path: '/admin/dashboard',
          component: import('../views/pages/dashboard/dashboardPanel.vue')
        },
        {
          name: 'userManagement',
          path: '/admin/users',
          component: import('../views/pages/dashboard/userManagement/indexPage.vue')
        },
        {
          name: 'requestRegistration_AddHouse',
          path: '/admin/request/addhouse',
          component: import('../views/pages/dashboard/requestRegistration/addHousePage.vue')
        },
        {
          name: 'requestRegistration_AddLand',
          path: '/admin/request/addland',
          component: import('../views/pages/dashboard/requestRegistration/addLandPage.vue')
        },
        {
          name: 'requestRegistration_AddRahnVaEjare',
          path: '/admin/request/addRahnVaEjare',
          component: import('../views/pages/dashboard/requestRegistration/addRahnVaEjarePage.vue')
        },
        {
          name: 'requestRegistration_AddRequestCustomer',
          path: '/admin/request/addRequestCustomer',
          component: import('../views/pages/dashboard/requestRegistration/addRequestCustomerPage.vue')
        }

      ]
    }
  ]
})

export default router

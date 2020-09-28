import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'registration',
    component: () => import('../components/Registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../components/FeedBack.vue')
  },
  {
    path: '/donorlist',
    name: 'donorlist',
    component: () => import('../components/DonorList.vue')
  },
  {
    path: '/requesterlist',
    name: 'requesterlist',
    component: () => import('../components/RequesterList.vue')
  },
  {
    path: '/dailytransaction',
    name: 'dailytransaction',
    component: () => import('../components/DailyTransaction.vue')
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: () => import('../components/Volunteer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

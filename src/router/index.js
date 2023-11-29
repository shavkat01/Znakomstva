import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import SignUp from '../views/SignUp/index.vue'
import Anketa from '../views/Anketa/index.vue'
// import CandidateProfile from '../views/CandidateProfile/index.vue'
import Message from '../views/Message/index.vue'
import Signature from '../views/Signature/index.vue'
import Profile from '../views/Profile/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'Sign-up',
      component: SignUp
    },
    {
      path: '/anketa',
      name: 'Anketa',
      component: Anketa
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/signature',
      name: 'Signature',
      component: Signature
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children: [
        {
          path: '',
          component: () => import('../views/Profile/ChildComponents/Profile.vue'),
        },
        {
          path: '/favourite',
          component: () => import('../views/Profile/ChildComponents/Favourite.vue'),
        },
        {
          path: '/profile-account',
          component: () => import('../views/Profile/ChildComponents/PersonalAccount.vue'),
        },
      ]
    },




    {
      path: '/:catchAll(.*)*',
      component: () => import('@/components/404.vue')
    }
  ]
})

export default router

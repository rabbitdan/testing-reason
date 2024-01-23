import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/divide',
      name: 'divide',
      component: () => import('../views/DivideView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue')
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../views/InsightsView.vue')
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('../views/NetworkView.vue')
    },
    {
      path: '/what',
      name: 'what',
      component: () => import('../views/WhatView.vue')
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('../views/NetworkView.vue')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/LearnView.vue')
    },
    {
      path: '/involved',
      name: 'involved',
      component: () => import('../views/InvolvedView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView'
import ServiceView from '../views/ServiceView'
import AnalyzeView from '../views/AnalyzeView'
import AboutView from '../views/AboutView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import NotFoundView from '../views/NotFoundView'

const routes = [
  {
    path: '/',
    redirect: '/whpu/'
  },
  {
    path: '/whpu/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/whpu/search/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/whpu/service/',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/whpu/analyze/',
    name: 'analyze',
    component: AnalyzeView
  },
  {
    path: '/whpu/about/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/whpu/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/whpu/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/whpu/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/whpu/:catchAll(.*)',
    redirect: "/whpu/404/"
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

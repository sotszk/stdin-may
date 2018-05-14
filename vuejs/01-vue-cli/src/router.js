import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import User from './views/users/_id'
import UserHome from './views/users/_id/home'
import UserProfile from './views/users/_id/profile'
import UserPhotos from './views/users/_id/photos'
import UserCounter from './views/users/_id/counter'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/users/:id',
    name: 'user',
    component: User,
    children: [
      {
        path: '',
        name: 'user-home',
        component: UserHome,
      },
      {
        path: 'profile',
        name: 'user-profile',
        component: UserProfile,
      },
      {
        path: 'photos',
        name: 'user-photos',
        component: UserPhotos,
      },
      {
        path: 'counter',
        name: 'user-counter',
        component: UserCounter,
      },
    ],
  },
]

export default new Router({
  routes,
})

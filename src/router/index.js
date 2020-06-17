import Vue from 'vue';
import VueRouter from 'vue-router';
import Preload from '../views/Preload.vue';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'predload',
    component: Preload,
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/name',
    name: 'name',
    component: () => import('../views/Name.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue'),
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/Share.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;

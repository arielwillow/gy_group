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
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/Calendar.vue'),
  },
  {
    path: '/name',
    name: 'name',
    component: () => import('../views/Name.vue'),
  },
  {
    path: '/special1',
    name: 'special1',
    component: () => import('../views/Special1.vue'),
  },
  {
    path: '/special2',
    name: 'special2',
    component: () => import('../views/Special2.vue'),
  },
  {
    path: '/doc1',
    name: 'doc1',
    component: () => import('../views/Doc1.vue'),
  },
  {
    path: '/doc2',
    name: 'doc2',
    component: () => import('../views/Doc2.vue'),
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/Join.vue'),
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/Notice.vue'),
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/Report.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

export default router;

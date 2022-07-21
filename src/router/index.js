import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/home-page/home-page.vue';
import SecondPage from '../views/second-page/second-page.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/second',
    name: 'SecondPage',
    component: SecondPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;

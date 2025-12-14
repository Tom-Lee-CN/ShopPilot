import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HelloWorld.vue';
import Login from '../views/loginViews/loginView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

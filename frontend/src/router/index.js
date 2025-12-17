import { createRouter, createWebHistory } from 'vue-router';
import testComponent from '../components/testComponent.vue';
import Login from '../views/loginViews/loginView.vue';

const routes = [
  {
    path: '/',
    name: 'testComponent',
    component: testComponent,
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

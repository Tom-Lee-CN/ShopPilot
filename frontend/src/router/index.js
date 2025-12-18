import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/loginViews/loginView.vue';
import test from '../views/testComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: test,
    meta: { title: '首页' }, // 面包屑将显示 "首页"
  },
  {
    path: '/products',
    name: 'Products',
    component: Login,
    meta: { title: '产品中心' }, // 面包屑将显示 "首页 / 产品中心"
    children: [
      {
        path: 'list',
        name: 'ProductList',
        component: Login,
        meta: { title: '产品列表' }, // 面包屑将显示 "首页 / 产品中心 / 产品列表"
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

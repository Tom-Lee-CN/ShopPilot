import { createRouter, createWebHistory } from 'vue-router';
import mainView from '../views/mainViews/mainView.vue';

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: mainView,
    meta: { title: '首页' }, // 面包屑将显示 "首页"
  },
  // {
  //   path: '/1',
  //   name: 'componentView',
  //   component: componentView,
  //   meta: { title: '产品中心' }, // 面包屑将显示 "首页 / 产品中心"
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'ProductList',
  //       component: Login,
  //       meta: { title: '产品列表' }, // 面包屑将显示 "首页 / 产品中心 / 产品列表"
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

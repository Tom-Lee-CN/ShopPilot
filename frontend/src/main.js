import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
// 组件库
import Pilot from './packages';
const pinia = createPinia();
const app = createApp(App);

// 导入全局样式
import './styles/index.scss';

app.use(pinia);
app.use(Pilot);
app.use(router);
app.mount('#app');

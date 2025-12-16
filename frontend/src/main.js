import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
// 组件库
import Pilot from './packages';
import Message from './packages/Message/message.js';
const pinia = createPinia();
const app = createApp(App);

// 导入全局样式
import './styles/index.scss';
// 全局消息提示
app.config.globalProperties.$message = Message;
app.use(pinia);
app.use(Pilot);
app.use(router);
app.mount('#app');

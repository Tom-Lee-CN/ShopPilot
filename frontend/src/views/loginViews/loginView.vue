<template>
  <div>
    <h1>Login Page</h1>
    <button @click="login">Login</button>
    <button @click="handleLogin">Login</button>
  </div>
</template>
<script>
import { getInfo } from '@/api/user'; // 导入 getInfo
export default {
  name: 'loginView',
  data() {
    return {};
  },
  methods: {
    login() {
      // 暂时，我们只导航到主页。
      this.$router.push({ name: 'Home' });
    },
    async handleLogin() {
      try {
        console.log('Sending request...');
        const response = await getInfo();
        console.log('Request successful:', response);
        // 登录成功后，可以跳转到主页
        // this.$router.push({ name: 'Home' });
      } catch (error) {
        console.error('Request failed:', error);
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>

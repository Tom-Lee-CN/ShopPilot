<template>
  <div style="padding: 20px">
    <h1>Backtop 组件测试</h1>
    <p>向下滚动页面，Backtop 组件将在右下角出现。</p>

    <div v-for="n in 100" :key="n" style="padding: 10px; border-bottom: 1px solid #eee">
      这是第 {{ n }} 个段落，用于撑开页面高度。
    </div>

    <pilot-backtop :bottom="100" />
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
};
</script>

<style>
/* 全局样式重置，确保布局正确 */
body {
  margin: 0;
  background-color: #f5f5f5; /* 给页面一个浅色背景，方便看清组件 */
}
</style>

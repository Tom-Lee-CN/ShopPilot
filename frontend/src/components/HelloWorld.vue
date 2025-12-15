<template>
  <div class="main-container">
    <h3>Radio (当前选中: {{ radioValue }})</h3>
    <div class="row">
      <pilot-radio-group v-model="radioValue">
        <pilot-radio label="1">选项1</pilot-radio>
        <pilot-radio label="2">选项2</pilot-radio>
      </pilot-radio-group>
    </div>

    <h3>Disabled Radio</h3>
    <div class="row">
      <pilot-radio-group v-model="radioValue" disabled>
        <pilot-radio label="1">选项1（禁用组）</pilot-radio>
        <pilot-radio label="2">选项2（禁用组）</pilot-radio>
      </pilot-radio-group>
    </div>

    <h3>Individually Disabled</h3>
    <div class="row">
      <pilot-radio-group v-model="radioValue">
        <pilot-radio label="1">选项1</pilot-radio>
        <pilot-radio label="2" disabled>选项2（单独禁用）</pilot-radio>
        <pilot-radio label="3">选项3</pilot-radio>
      </pilot-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 全局注册后，这里保持为空
  components: {},
  data() {
    return {
      radioValue: '1',
    };
  },
};
</script>

<style scoped lang="scss">
.main-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h3 {
  margin-bottom: 10px;
  font-weight: 600;
  border-left: 4px solid #409eff;
  padding-left: 8px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.alert-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.card-row {
  display: grid;
  // 创建一个响应式的网格布局
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
}

.input-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  align-items: center;
}
</style>

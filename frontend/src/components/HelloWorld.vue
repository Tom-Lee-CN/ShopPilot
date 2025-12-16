<template>
  <div class="main-container">
    <pilot-row :gutter="20">
      <pilot-col :lg="8" :md="12" :sm="24" :xs="24">
        <h3>Radio (当前选中: {{ radioValue }})</h3>
        <pilot-radio-group v-model="radioValue">
          <pilot-radio label="1">选项1</pilot-radio>
          <pilot-radio label="2">选项2</pilot-radio>
        </pilot-radio-group>
      </pilot-col>

      <pilot-col :lg="8" :md="12" :sm="24" :xs="24">
        <h3>Disabled Radio</h3>
        <pilot-radio-group v-model="radioValue" disabled>
          <pilot-radio label="1">选项1（禁用组）</pilot-radio>
          <pilot-radio label="2">选项2（禁用组）</pilot-radio>
        </pilot-radio-group>
      </pilot-col>

      <pilot-col :lg="8" :md="24" :sm="24" :xs="24">
        <h3>Individually Disabled</h3>
        <pilot-radio-group v-model="radioValue">
          <pilot-radio label="1">选项1</pilot-radio>
          <pilot-radio label="2" disabled>选项2（单独禁用）</pilot-radio>
          <pilot-radio label="3">选项3</pilot-radio>
        </pilot-radio-group>
      </pilot-col>
    </pilot-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
}

h3 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  border-left: 4px solid #409eff;
  padding-left: 8px;
}
</style>

<template>
  <div class="main-container">
    <h3>Alert</h3>
    <div class="alert-row">
      <pilot-alert title="Success" type="success" show-icon />
      <pilot-alert title="Error" type="error" show-icon description="This is a description." />
    </div>

    <div class="input-row">
      <pilot-textarea v-model="textareaValue" placeholder="禁用状态" disabled></pilot-textarea>
    </div>
    <h2>Select</h2>
    <div class="input-row">
      <pilot-select
        v-model="selectValue"
        :options="selectOptions"
        placeholder="请选择一个选项"
      ></pilot-select>
    </div>
    <div class="input-row">
      <pilot-select v-model="selectValue" :options="selectOptions" disabled></pilot-select>
    </div>
    <p>当前选中的值是: {{ selectValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 全局注册后，这里保持为空
  components: {},
  data() {
    return {
      inputValue: '',
      clearableValue: 'Some initial text',
      passwordValue: '123456',
      textareaValue: '',
      selectValue: '',
      selectOptions: [
        { label: '黄金糕', value: 'gold' },
        { label: '双皮奶', value: 'milk' },
        { label: '蚵仔煎', value: 'oyster' },
        { label: '龙须面', value: 'noodle' },
        { label: '北京烤鸭', value: 'duck' },
      ],
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

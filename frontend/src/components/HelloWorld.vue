<template>
  <div class="main-container">
    <h3>Button</h3>
    <div class="row">
      <pilot-button>Default</pilot-button>
      <pilot-button type="primary">Primary</pilot-button>
      <pilot-button type="success">Success</pilot-button>
      <pilot-button type="info">Info</pilot-button>
      <pilot-button type="warning">Warning</pilot-button>
      <pilot-button type="danger">Danger</pilot-button>
    </div>

    <h3>Icon</h3>
    <div class="row">
      <pilot-icon name="edit" />
      <pilot-icon name="delete" />
      <pilot-icon name="share" />
      <span>(Icons: edit, delete, share)</span>
    </div>

    <h3>Alert</h3>
    <div class="alert-row">
      <pilot-alert title="Success" type="success" show-icon />
      <pilot-alert title="Error" type="error" show-icon description="This is a description." />
    </div>

    <h3>Card</h3>
    <div class="card-row">
      <pilot-card header="Simple Card"> This is the body content of a simple card. </pilot-card>

      <pilot-card shadow="hover">
        <template #header>
          <h4>Card with Hover Shadow</h4>
        </template>
        <div>This card shows a shadow on hover.</div>
        <template #footer>
          <pilot-button type="primary">Action</pilot-button>
        </template>
      </pilot-card>

      <pilot-card shadow="never"> This card has no shadow and no header/footer. </pilot-card>
    </div>
    <h3>Input</h3>
    <div class="input-row">
      <pilot-input v-model="inputValue" placeholder="Please input" />
      <pilot-input v-model="clearableValue" placeholder="Clearable Input" clearable />
      <pilot-input
        v-model="passwordValue"
        type="password"
        placeholder="Password"
        show-password
        clearable
      />
      <pilot-input v-model="inputValue" disabled placeholder="Disabled" />
    </div>
    <div class="input-row">
      <span>Input Value: {{ inputValue }}</span>
      <br />
      <span>Clearable Value: {{ clearableValue }}</span>
      <br />
      <span>Password Value: {{ passwordValue }}</span>
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
      inputValue: '',
      clearableValue: 'Some initial text',
      passwordValue: '123456',
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

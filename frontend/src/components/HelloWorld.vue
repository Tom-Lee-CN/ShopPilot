<template>
  <div class="main-container">
    <h1>测试页面</h1>
    <div class="row">
      <PilotButton>Default</PilotButton>
      <PilotButton type="primary">Primary</PilotButton>
      <PilotButton type="success">Success</PilotButton>
      <PilotButton type="info">Info</PilotButton>
      <PilotButton type="warning">Warning</PilotButton>
      <PilotButton type="danger">Danger</PilotButton>
    </div>
    <div class="row">
      <PilotButton plain>Default</PilotButton>
      <PilotButton type="primary" plain>Primary</PilotButton>
      <PilotButton type="success" plain>Success</PilotButton>
      <PilotButton type="info" plain>Info</PilotButton>
      <PilotButton type="warning" plain>Warning</PilotButton>
      <PilotButton type="danger" plain>Danger</PilotButton>
    </div>
    <div class="row">
      <PilotButton type="primary" size="large">Large</PilotButton>
      <PilotButton type="primary">Default</PilotButton>
      <PilotButton type="primary" size="small">Small</PilotButton>
    </div>
    <div class="row">
      <PilotButton type="primary" round>Round</PilotButton>
      <PilotButton type="success" round>Round</PilotButton>
      <PilotButton type="primary" disabled>Disabled</PilotButton>
      <PilotButton type="success" plain disabled>Disabled</PilotButton>
    </div>
  </div>
</template>
<script>
import PilotButton from '../packages/Button';
export default {
  name: 'HelloWorld',
  components: {
    PilotButton,
  },
};
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-showcase {
  padding: 20px;
}
.row {
  margin-bottom: 20px;
}
.pilot-button {
  margin-right: 12px;
}
</style>

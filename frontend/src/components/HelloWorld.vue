<template>
  <div class="main-container">
    <h1>测试页面</h1>
    <div class="button-group">
      <PilotButton type="primary" disabled>Disabled</PilotButton>
      <PilotButton type="success" disabled>Disabled</PilotButton>
      <PilotButton type="info" disabled>Disabled</PilotButton>
      <PilotButton type="warning" disabled>Disabled</PilotButton>
      <PilotButton type="danger" disabled>Disabled</PilotButton>
    </div>

    <h2>Icons</h2>
    <div class="icon-group">
      <pilot-icon name="edit" />
      <pilot-icon name="share" />
      <pilot-icon name="delete" />
      <pilot-icon name="loading" />
      <pilot-icon name="arrow-left" />
      <pilot-icon name="arrow-right" />
    </div>

    <h2>Icon with Size and Color</h2>
    <div class="icon-group">
      <pilot-icon name="star" size="24px" />
      <pilot-icon name="star-filled" size="24px" color="#f7ba2a" />
      <pilot-icon name="circle-plus" size="30" color="green" />
      <pilot-icon name="remove" :size="30" color="red" />
    </div>

    <h2>Icon in Button</h2>
    <div class="button-group">
      <PilotButton type="primary">
        <pilot-icon name="edit" />
        Edit
      </PilotButton>
      <PilotButton type="success">
        <pilot-icon name="check" />
        Success
      </PilotButton>
      <PilotButton type="info" plain>
        More
        <pilot-icon name="arrow-right" />
      </PilotButton>
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
.button-group,
.icon-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.pilot-button,
.pilot-icon {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

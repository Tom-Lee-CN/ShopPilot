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
      <span> (Edit, Delete, Share)</span>
    </div>

    <h3>Alert</h3>
    <div class="alert-row">
      <pilot-alert title="Success" type="success" show-icon />
      <pilot-alert title="Info" type="info" show-icon />
      <pilot-alert title="Warning" type="warning" show-icon />
      <pilot-alert title="Error" type="error" show-icon description="This is a description." />
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h3 {
  margin-bottom: 10px;
  font-weight: 600;
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
</style>

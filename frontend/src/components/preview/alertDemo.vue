<template>
  <div class="demo">
    <h3>Alert Demo</h3>
    <pilot-alert title="Success" type="success" description="This is success." />
    <pilot-alert title="Warning" type="warning" description="This is warning." />
    <pilot-alert title="Success" type="success" description="This is success." />
    <pilot-alert title="Warning" type="warning" description="This is warning." />
  </div>
</template>
<script>
export default { name: 'alertDemo' };
</script>
<style scoped>
.demo {
  padding: 12px;
}
</style>

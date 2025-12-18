<template>
  <div class="test-container">
    <h2>Steps 步骤条</h2>
    <p>引导用户按照流程完成任务的导航条。</p>

    <div class="demo-block">
      <h3>基础用法</h3>
      <p>简单的步骤条。</p>
      <pilot-steps :active="active" finish-status="success">
        <pilot-step title="步骤 1"></pilot-step>
        <pilot-step title="步骤 2"></pilot-step>
        <pilot-step title="步骤 3"></pilot-step>
      </pilot-steps>
    </div>

    <div class="demo-block">
      <h3>带描述的步骤条</h3>
      <p>每个步骤可以有更详细的描述。</p>
      <pilot-steps :active="active" finish-status="success">
        <pilot-step title="已完成" description="这是一段很长很长很长的描述性文字"></pilot-step>
        <pilot-step title="进行中" description="这是一段很长很长很长的描述性文字"></pilot-step>
        <pilot-step title="待处理" description="这是一段很长很长很长的描述性文字"></pilot-step>
      </pilot-steps>
    </div>

    <div class="demo-block">
      <h3>简洁风格</h3>
      <p>设置 <code>simple</code> 属性可以应用简洁风格，该风格下的步骤条不显示描述。</p>
      <pilot-steps :active="active" finish-status="success" simple>
        <pilot-step title="步骤 1"></pilot-step>
        <pilot-step title="步骤 2"></pilot-step>
        <pilot-step title="步骤 3"></pilot-step>
      </pilot-steps>
    </div>

    <pilot-button @click="nextStep" style="margin-top: 20px">下一步</pilot-button>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    nextStep() {
      if (this.active++ > 2) {
        this.active = 0;
      }
    },
  },
};
</script>

<style scoped>
.test-container {
  padding: 20px;
}
.demo-block {
  margin-bottom: 40px;
}
h2,
h3 {
  margin-bottom: 10px;
}
p {
  color: #5e6d82;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>

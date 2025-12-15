<template>
  <div class="pilot-card" :class="`is-${shadow}-shadow`">
    <div v-if="$slots.header || header" class="pilot-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="pilot-card__body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="pilot-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PilotCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    shadow: {
      type: String,
      default: 'always', // always, hover, never
    },
  },
};
</script>
<style scoped lang="scss">
.pilot-card {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  &.is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &__header {
    padding: 18px 20px;
    border-bottom: 1px solid #e4e7ed;
    box-sizing: border-box;
  }
  &__body {
    padding: 20px;
  }
  &__footer {
    padding: 18px 20px;
    border-top: 1px solid #e4e7ed;
    box-sizing: border-box;
  }
}
</style>

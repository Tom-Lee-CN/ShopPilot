<template>
  <ul
    class="pilot-menu"
    :class="{
      'pilot-menu--horizontal': mode === 'horizontal',
      'pilot-menu--vertical': mode === 'vertical',
      'is-collapse': collapse,
    }"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'PilotMenu',
  props: {
    mode: {
      type: String,
      default: 'horizontal',
    },
    defaultActive: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '#303133',
    },
    textColor: {
      type: String,
      default: '#fff',
    },
    activeTextColor: {
      type: String,
      default: '#ffd04b',
    },
    // 新增：是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeIndex: this.defaultActive,
    };
  },
  provide() {
    return {
      rootMenu: this,
    };
  },
  watch: {
    defaultActive(newVal) {
      this.activeIndex = newVal;
    },
  },
  methods: {
    handleItemClick(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.pilot-menu {
  margin: 0;
  padding-left: 0;
  list-style: none;
  border-bottom: solid 1px #e6e6e6;
  box-sizing: border-box;

  &--horizontal {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: none;
  }

  &--vertical {
    width: 240px;
    border-right: solid 1px #e6e6e6;
    border-bottom: none;
    transition: width 0.3s;

    &.is-collapse {
      width: 64px;
    }
  }
}
</style>

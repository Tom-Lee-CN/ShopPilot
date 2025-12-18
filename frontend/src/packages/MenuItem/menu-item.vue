<template>
  <!-- 菜单项的根元素 -->
  <li
    class="pilot-menu-item"
    :class="{ 'is-active': isActive, 'is-disabled': disabled }"
    :style="itemStyle"
    @click="handleClick"
  >
    <!-- 默认插槽，用于显示菜单项的文本或图标 -->
    <slot></slot>
  </li>
</template>

<script>
export default {
  // 组件名称，用于调试和递归
  name: 'PilotMenuItem',

  // 定义组件接收的 props
  props: {
    // 菜单项的唯一标识，必填
    index: {
      type: String,
      required: true,
    },
    // 是否禁用该菜单项
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  // 注入来自祖先组件 (Menu) 的依赖
  inject: ['rootMenu'],

  // 组件的响应式数据
  data() {
    return {
      // 当前菜单项的层级，用于计算缩进
      level: 0,
    };
  },

  // 计算属性
  computed: {
    // 判断当前菜单项是否处于激活状态
    isActive() {
      return this.rootMenu.activeIndex === this.index;
    },
    // 动态计算菜单项的行内样式
    itemStyle() {
      const style = {};
      // 如果是水平模式下的顶层菜单项
      if (this.rootMenu.mode === 'horizontal' && this.level === 0) {
        // 设置左右内边距
        style.padding = '0 20px';
      } else {
        // 否则，根据层级计算左侧内边距（缩进）
        style.paddingLeft = `${(this.level + 1) * 20}px`;
      }
      return style;
    },
  },

  // 生命周期钩子：实例被创建后调用
  created() {
    // 通过遍历父组件链来计算当前组件的层级
    let parent = this.$parent;
    let level = 0;
    // 循环直到找到根组件 'PilotMenu'
    while (parent && parent.$options.name !== 'PilotMenu') {
      // 每遇到一个 'PilotSubMenu'，层级加一
      if (parent.$options.name === 'PilotSubMenu') {
        level++;
      }
      parent = parent.$parent;
    }
    this.level = level;
  },

  // 方法
  methods: {
    // 处理点击事件
    handleClick() {
      // 如果菜单项被禁用，则不执行任何操作
      if (this.disabled) {
        return;
      }
      // 调用根组件的 handleItemClick 方法，通知更新 activeIndex
      this.rootMenu.handleItemClick(this.index);
    },
  },
};
</script>

<style lang="scss">
.pilot-menu-item {
  height: 50px;
  line-height: 50px;
  font-size: var(--pilot-font-size-base);
  color: var(--pilot-text-color-regular);
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: var(--pilot-fill-color-light);
  }

  &.is-active {
    color: var(--pilot-color-primary);
    background-color: var(--pilot-fill-color-light);
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: none !important;
  }

  /* 水平模式下的顶层菜单项 */
  .pilot-menu--horizontal > & {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;

    &.is-active {
      border-bottom-color: var(--pilot-color-primary);
      color: var(--pilot-color-primary);
      background-color: var(--pilot-color-white);
    }
  }

  /* 垂直折叠模式下的顶层菜单项 */
  .pilot-menu--vertical.is-collapse > & {
    padding-left: 0 !important;
    text-align: center;
  }
}

/* 弹出菜单中的菜单项 */
.pilot-menu--popup .pilot-menu-item {
  height: 40px;
  line-height: 40px;
  font-size: var(--pilot-font-size-base);
  padding-left: 20px !important; // 强制覆盖内联样式
}
</style>

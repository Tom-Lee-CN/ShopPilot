<template>
  <!-- 子菜单根元素 -->
  <li
    class="pilot-sub-menu"
    :class="{ 'is-active': isActive, 'is-opened': opened }"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <!-- 子菜单标题 -->
    <div class="pilot-sub-menu__title" :style="subItemStyle" @click="handleClick">
      <!-- 标题插槽 -->
      <slot name="title"></slot>
      <!-- 展开/折叠箭头 -->
      <i class="pilot-sub-menu__arrow" :class="{ 'is-opened': opened || isPopupOpen }"></i>
    </div>

    <!-- 弹出式子菜单 (用于 horizontal 和 vertical-collapse 模式) -->
    <transition name="pilot-zoom-in-top" @after-leave="doDestroy">
      <ul
        v-show="mouseInChild"
        class="pilot-menu pilot-menu--popup"
        :class="[`pilot-menu--popup-${poperPlacement}`]"
      >
        <!-- 默认插槽，包含 MenuItem 或下一级 SubMenu -->
        <slot></slot>
      </ul>
    </transition>

    <!-- 内联式子菜单 (用于 vertical 模式) -->
    <transition name="pilot-collapse">
      <ul v-show="opened" class="pilot-menu pilot-menu--inline">
        <!-- 默认插槽，包含 MenuItem 或下一级 SubMenu -->
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  // 组件名称
  name: 'PilotSubMenu',

  // 定义 props
  props: {
    // 子菜单的唯一标识，必填
    index: {
      type: String,
      required: true,
    },
  },

  // 注入来自祖先组件的依赖
  inject: ['rootMenu'],

  // 向后代组件提供依赖
  provide() {
    return {
      // 将当前层级 +1 后提供给子组件
      level: this.level + 1,
    };
  },

  // 组件的响应式数据
  data() {
    return {
      // 当前子菜单的层级
      level: 0,
      // 垂直模式下，子菜单是否展开
      opened: false,
      // 鼠标是否在弹出菜单中
      mouseInChild: false,
      // 用于延迟处理鼠标事件的定时器
      timeout: null,
      // 弹出菜单是否打开 (用于控制箭头动画)
      isPopupOpen: false,
    };
  },

  // 计算属性
  computed: {
    // 判断当前是否为弹出模式 (水平模式或垂直折叠模式)
    isMenuPopup() {
      return this.rootMenu.mode === 'horizontal' || this.rootMenu.collapse;
    },
    // 计算弹出菜单的位置 (下方或右侧)
    poperPlacement() {
      return this.rootMenu.mode === 'horizontal' ? 'bottom' : 'right';
    },
    // 判断当前子菜单是否激活 (即其后代有激活的 MenuItem)
    isActive() {
      // 如果当前激活项的索引以本子菜单的索引开头，则认为该子菜单是激活的
      return this.rootMenu.activeIndex.startsWith(this.index);
    },
    // 动态计算子菜单标题的行内样式
    subItemStyle() {
      const style = {};
      // 如果是水平模式下的顶层子菜单
      if (this.rootMenu.mode === 'horizontal' && this.level === 0) {
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
    while (parent && parent.$options.name !== 'PilotMenu') {
      if (parent.$options.name === 'PilotSubMenu') {
        level++;
      }
      parent = parent.$parent;
    }
    this.level = level;
  },

  // 方法
  methods: {
    // 处理标题点击事件
    handleClick() {
      // 如果是弹出模式，则不响应点击
      if (this.isMenuPopup) return;
      // 切换垂直模式下的展开/折叠状态
      this.opened = !this.opened;
    },
    // 处理鼠标进入事件
    handleMouseenter() {
      // 如果不是弹出模式，则不处理
      if (!this.isMenuPopup) return;
      clearTimeout(this.timeout);
      // 延迟 300ms 显示弹出菜单，防止误触
      this.timeout = setTimeout(() => {
        this.mouseInChild = true;
        this.isPopupOpen = true; // 控制箭头动画
      }, 300);
    },
    // 处理鼠标离开事件
    handleMouseleave() {
      // 如果不是弹出模式，则不处理
      if (!this.isMenuPopup) return;
      clearTimeout(this.timeout);
      // 延迟 300ms 关闭弹出菜单
      this.timeout = setTimeout(() => {
        this.mouseInChild = false;
        this.isPopupOpen = false; // 控制箭头动画
      }, 300);
    },
    // 过渡动画结束后的回调
    doDestroy() {
      // v-show 已经处理了 DOM 的显示隐藏，此方法可用于未来的清理逻辑
    },
  },
};
</script>

<style lang="scss">
.pilot-sub-menu__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  font-size: var(--pilot-font-size-base);
  color: var(--pilot-text-color-regular);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--pilot-fill-color-light);
  }

  .pilot-sub-menu.is-active > & {
    color: var(--pilot-color-primary);
  }
}

.pilot-sub-menu__arrow {
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: transparent transparent transparent var(--pilot-text-color-secondary);
  transition: transform 0.3s;
  margin-right: 20px;

  &.is-opened {
    transform: rotate(90deg);
  }
}

/* 水平模式下的特殊样式 */
.pilot-menu--horizontal {
  > .pilot-sub-menu {
    > .pilot-sub-menu__title {
      height: 60px;
      line-height: 60px;
      border-bottom: 2px solid transparent;

      > .pilot-sub-menu__arrow {
        border-color: var(--pilot-text-color-secondary) transparent transparent transparent;
        margin-left: 5px;

        &.is-opened {
          transform: rotate(180deg);
        }
      }
    }

    &.is-active > .pilot-sub-menu__title {
      border-bottom-color: var(--pilot-color-primary);
    }
  }
}

/* 弹出菜单容器 */
.pilot-menu--popup {
  position: absolute;
  z-index: 100;
  min-width: 150px;
  background-color: var(--pilot-color-white);
  border: 1px solid var(--pilot-border-color-light);
  border-radius: var(--pilot-border-radius-base);
  box-shadow: var(--pilot-box-shadow-base);
  padding: 6px 0;

  &.pilot-menu--popup-bottom {
    top: 65px; // 留出一些间距
  }

  &.pilot-menu--popup-right {
    top: 0;
    left: 100%;
    margin-left: 5px;
  }
}

/* 内联菜单容器 (垂直展开) */
.pilot-menu--inline {
  background-color: var(--pilot-fill-color-blank);
  overflow: hidden;
}

/* 动画效果 */
.pilot-zoom-in-top-enter-active,
.pilot-zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition:
    transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.pilot-zoom-in-top-enter-from,
.pilot-zoom-in-top-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.pilot-collapse-enter-active,
.pilot-collapse-leave-active {
  transition: height 0.3s ease-in-out;
}
.pilot-collapse-enter-from,
.pilot-collapse-leave-to {
  height: 0;
}
</style>

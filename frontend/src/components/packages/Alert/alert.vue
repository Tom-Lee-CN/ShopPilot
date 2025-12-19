<template>
  <div
    v-if="visible"
    class="pilot-alert"
    :class="[typeClass, { 'is-center': center }]"
    role="alert"
  >
    <pilot-icon v-if="showIcon" class="pilot-alert__icon" :name="iconClass" />
    <div class="pilot-alert__content">
      <span class="pilot-alert__title" :class="{ 'is-bold': description }">{{ title }}</span>
      <p v-if="description" class="pilot-alert__description">{{ description }}</p>
      <i v-if="closable" class="pilot-alert__close-btn" @click="close">
        <pilot-icon name="close" />
      </i>
    </div>
  </div>
</template>
<script>
import pilotIcon from '../Icon/icon.vue';

// 用于图标的映射
const TYPE_CLASSES_MAP = {
  success: 'success-filled',
  warning: 'warning-filled',
  danger: 'circle-close-filled',
  info: 'info-filled',
};
export default {
  name: 'PilotAlert',
  components: {
    pilotIcon,
  },
  props: {
    // 标题
    title: { type: String, default: '' },
    // 描述
    description: { type: String, default: '' },
    // 类型(状态)
    type: { type: String, default: 'info' },
    // 是否可关闭
    closable: { type: Boolean, default: false },
    // 是否居中
    center: { type: Boolean, default: false },
    // 是否展示同状态的图标
    showIcon: { type: Boolean, default: false },
  },
  data() {
    return {
      visible: true,
    };
  },

  computed: {
    typeClass() {
      return `pilot-alert--${this.type}`;
    },
    iconClass() {
      return TYPE_CLASSES_MAP[this.type];
    },
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>
<style scoped lang="scss">
@use '../../../styles/mixins' as *;
.pilot-alert {
  width: 100%;
  padding: $alert-padding-y $alert-padding-x;
  margin: 0;
  border-radius: $alert-border-radius;
  position: relative;
  background-color: var(--pilot-fill-color-blank);
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  &.is-center {
    justify-content: center;
  }

  &--success {
    @include alert-variant($success-color);
  }
  &--warning {
    @include alert-variant($warning-color);
  }
  &--info {
    @include alert-variant($info-color);
  }
  &--danger {
    @include alert-variant($danger-color);
  }
  &__icon {
    font-size: $alert-icon-size;
    width: $alert-icon-size;
    margin-right: $alert-icon-margin-right;
  }
  &__content {
    display: table-cell;
    padding: 0 8px;
    width: 100%;
  }
  &__title {
    font-size: $alert-title-font-size;
    line-height: 18px;
    display: block;
    margin-bottom: 0.1rem;
    &.is-bold {
      font-weight: bold;
    }
  }
  &__description {
    font-size: $alert-description-font-size;
    margin: 5px 0 0 0;
  }
  &__close-btn {
    font-size: $alert-close-font-size;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;

    .pilot-icon {
      font-size: 1em;
    }
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }
}
</style>

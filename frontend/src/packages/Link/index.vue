<template>
  <a
    :class="[
      'pilot-link',
      type ? `pilot-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default" class="pilot-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'PilotLink',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) =>
        ['default', 'primary', 'success', 'warning', 'info', 'danger'].includes(val),
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
      }
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss">
.pilot-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;

  &--inner {
    margin-left: 4px;
  }

  &.is-underline:hover:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid;
  }

  &.is-disabled {
    cursor: not-allowed;
  }

  &--default {
    color: #606266;
    &:hover {
      color: #409eff;
    }
    &.is-disabled {
      color: #c0c4cc;
    }
  }

  &--primary {
    color: #409eff;
    &:hover {
      color: #66b1ff;
    }
    &.is-disabled {
      color: #a0cfff;
    }
  }

  &--success {
    color: #67c23a;
    &:hover {
      color: #85ce61;
    }
    &.is-disabled {
      color: #b3e19d;
    }
  }

  &--warning {
    color: #e6a23c;
    &:hover {
      color: #ebb563;
    }
    &.is-disabled {
      color: #f3d19e;
    }
  }

  &--info {
    color: #909399;
    &:hover {
      color: #a6a9ad;
    }
    &.is-disabled {
      color: #c8c9cc;
    }
  }

  &--danger {
    color: #f56c6c;
    &:hover {
      color: #f78989;
    }
    &.is-disabled {
      color: #fab6b6;
    }
  }
}
</style>

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
@use '../../styles/variables.scss';
@use 'sass:color';
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
    color: $text-color-regular;
    &:hover {
      color: $primary-color;
    }
    &.is-disabled {
      color: $text-color-placeholder;
    }
  }

  &--primary {
    color: $primary-color;
    &:hover {
      color: color.mix($color-white, $primary-color, 20%);
    }
    &.is-disabled {
      color: color.mix($color-white, $primary-color, 50%);
    }
  }

  &--success {
    color: $success-color;
    &:hover {
      color: color.mix($color-white, $success-color, 20%);
    }
    &.is-disabled {
      color: color.mix($color-white, $success-color, 50%);
    }
  }

  &--warning {
    color: $warning-color;
    &:hover {
      color: color.mix($color-white, $warning-color, 20%);
    }
    &.is-disabled {
      color: color.mix($color-white, $warning-color, 50%);
    }
  }

  &--info {
    color: $info-color;
    &:hover {
      color: color.mix($color-white, $info-color, 20%);
    }
    &.is-disabled {
      color: color.mix($color-white, $info-color, 50%);
    }
  }

  &--danger {
    color: $danger-color;
    &:hover {
      color: color.mix($color-white, $danger-color, 20%);
    }
    &.is-disabled {
      color: color.mix($color-white, $danger-color, 50%);
    }
  }
}
</style>

<template>
  <button :class="buttonClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PilotButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'success', 'danger', 'warning', 'info'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'large', 'small'].includes(value);
      },
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return [
        'pilot-button',
        `pilot-button--${this.type}`,
        `pilot-button--${this.size}`,
        { 'is-plain': this.plain, 'is-round': this.round, 'is-disabled': this.disabled },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.pilot-button {
  // --- Reset & Basic Layout ---
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $color-white;
  border: 1px solid $border-color;
  color: $text-color-primary;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  user-select: none;

  // // --- Sizing & Spacing ---
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 500;

  // --- Transitions ---
  transition:
    0.1s background-color,
    0.1s border-color,
    0.1s color,
    0.1s box-shadow;

  // --- Default State for Primary Button ---
  &--default {
    padding: $button-padding-y-default $button-padding-x-default;
    font-size: $button-font-size-default;
    border-radius: 4px;
  }
  &--large {
    padding: $button-padding-y-large $button-padding-x-large;
    font-size: $button-font-size-large;
    border-radius: 4px;
  }
  &--small {
    padding: $button-padding-y-small $button-padding-x-small;
    font-size: $button-font-size-small;
    border-radius: 3px;
  }

  &--primary {
    @include button-variant($primary-color);
  }

  // --- Other Variants ---
  &--success {
    @include button-variant($success-color);
  }

  &--danger {
    @include button-variant($danger-color);
  }

  &--warning {
    @include button-variant($warning-color);
  }

  &--info {
    @include button-variant($info-color);
  }

  &.is-plain {
    &.pilot-button--default {
      @include button-plain-variant($text-color-primary);
    }
    &.pilot-button--primary {
      @include button-plain-variant($primary-color);
    }
    &.pilot-button--success {
      @include button-plain-variant($success-color);
    }
    &.pilot-button--info {
      @include button-plain-variant($info-color);
    }
    &.pilot-button--warning {
      @include button-plain-variant($warning-color);
    }
    &.pilot-button--danger {
      @include button-plain-variant($danger-color);
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>

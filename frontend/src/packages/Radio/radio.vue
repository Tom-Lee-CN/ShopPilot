<template>
  <label
    class="pilot-radio"
    :class="{
      'is-disabled': isDisabled,
      'is-checked': isChecked,
    }"
    @click.prevent="handleClick"
  >
    <input
      type="radio"
      class="pilot-radio__original"
      :value="label"
      :disabled="isDisabled"
      :checked="isChecked"
    />
    <span class="pilot-radio__inner"></span>
    <span class="pilot-radio__label">
      <slot>选项</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'PilotRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    radioGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'PilotRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return null;
    },
    isDisabled() {
      return this.disabled || (this.radioGroup && this.radioGroup.disabled);
    },
    isChecked() {
      return this.radioGroup ? this.radioGroup.modelValue === this.label : false;
    },
  },
  methods: {
    handleClick() {
      if (this.radioGroup && !this.isDisabled) {
        this.radioGroup.handleChange(this.label);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pilot-radio {
  color: #606266;
  font-weight: 500;
  position: relative; /* 关键：作为原生input的定位父级 */
  cursor: pointer;
  display: inline-flex; /* 使用flex进行垂直对齐，最稳妥 */
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  margin-right: 30px;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  &.is-disabled {
    cursor: not-allowed;
    color: #c0c4cc;
  }

  &.is-checked {
    .pilot-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .pilot-radio__label {
      color: #409eff;
    }
  }
}

.pilot-radio__inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative; /* 作为内部小圆点的定位父级 */
  display: inline-block;
  box-sizing: border-box;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);

  &:hover {
    border-color: #409eff;
  }

  &::after {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.15s ease-in;
  }
}

/* 关键：隐藏原生input的样式 */
.pilot-radio__original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

.pilot-radio__label {
  padding-left: 5px;
}
</style>

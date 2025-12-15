<template>
  <div class="pilot-textarea">
    <textarea
      ref="textareaRef"
      class="pilot-textarea__inner"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      @input="handleInput"
    ></textarea>
    <span v-if="showWordLimit && maxlength" class="pilot-textarea__count">
      {{ textLength }}/{{ maxlength }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'PilotTextarea',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    // 是否自动调整高度
    autosize: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: [Number, String],
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue() {
      // 当绑定的值变化时，重新计算高度
      this.resizeTextarea();
    },
  },
  mounted() {
    // 组件挂载后，计算一次初始高度
    this.resizeTextarea();
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    resizeTextarea() {
      if (!this.autosize) return;
      this.$nextTick(() => {
        const textarea = this.$refs.textareaRef;
        if (!textarea) return;
        // 先重置高度，再设置为 scrollHeight
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
    },
  },
  computed: {
    textLength() {
      return this.modelValue?.length || 0;
    },
  },
};
</script>
<style scoped lang="scss">
.pilot-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}

.pilot-textarea__inner {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 15px;
  line-height: 1.5;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  resize: vertical; // 允许用户手动调整高度

  &::placeholder {
    color: #c0c4cc;
  }

  &:focus {
    outline: none;
    border-color: #409eff;
  }

  &:disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
}

.pilot-textarea__count {
  position: absolute;
  bottom: 5px;
  right: 15px;
  color: #909399;
  font-size: 12px;
  pointer-events: none;
  background-color: #fff;
  padding-left: 4px;
}
</style>

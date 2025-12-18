<template>
  <transition name="pilot-fade-in">
    <div v-if="visible" :style="backtopStyle" class="pilot-backtop" @click.stop="handleClick">
      <slot>
        <pilot-icon name="caret-top" />
      </slot>
    </div>
  </transition>
</template>

<script>
import PilotIcon from '../Icon/icon.vue';

export default {
  name: 'PilotBacktop',

  components: {
    PilotIcon,
  },

  props: {
    target: {
      type: String,
      default: '',
    },
    visibilityHeight: {
      type: Number,
      default: 200,
    },
    bottom: {
      type: Number,
      default: 40,
    },
    right: {
      type: Number,
      default: 40,
    },
  },

  data() {
    return {
      visible: false,
      throttledScrollHandler: null,
    };
  },

  computed: {
    backtopStyle() {
      return {
        right: `${this.right}px`,
        bottom: `${this.bottom}px`,
      };
    },
  },

  mounted() {
    this.throttledScrollHandler = this.throttle(this.handleScroll, 200);
    this.getScrollContainer().addEventListener('scroll', this.throttledScrollHandler);
  },

  beforeUnmount() {
    this.getScrollContainer().removeEventListener('scroll', this.throttledScrollHandler);
  },

  methods: {
    getScrollContainer() {
      return this.target ? document.querySelector(this.target) : window;
    },
    handleScroll() {
      const scrollTop = this.getScrollTop();
      this.visible = scrollTop >= this.visibilityHeight;
    },

    getScrollTop() {
      if (this.target) {
        return this.getScrollContainer().scrollTop;
      }
      return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    },

    handleClick(e) {
      this.scrollToTop();
      this.$emit('click', e);
    },

    scrollToTop() {
      const from = this.getScrollTop();
      const to = 0;
      const duration = 300;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const nextScrollTop = from + ((to - from) * progress) / duration;

        if (progress < duration) {
          this.setScrollTop(Math.min(nextScrollTop, from));
          window.requestAnimationFrame(step);
        } else {
          this.setScrollTop(to);
        }
      };
      window.requestAnimationFrame(step);
    },

    setScrollTop(scrollTop) {
      if (this.target) {
        this.getScrollContainer().scrollTop = scrollTop;
      } else {
        document.documentElement.scrollTop = scrollTop;
        document.body.scrollTop = scrollTop;
      }
    },
    throttle(fn, delay) {
      let timer = null;
      return function (...args) {
        if (!timer) {
          timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
          }, delay);
        }
      };
    },
  },
};
</script>

<style lang="scss">
.pilot-backtop {
  position: fixed;
  background-color: var(--pilot-bg-color-overlay);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--pilot-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--pilot-box-shadow-lighter);
  cursor: pointer;
  z-index: 100;

  &:hover {
    background-color: var(--pilot-color-primary-light-3);
    color: var(--pilot-color-white);
  }
}

.pilot-fade-in-enter-active,
.pilot-fade-in-leave-active {
  transition: opacity 0.3s;
}

.pilot-fade-in-enter-from,
.pilot-fade-in-leave-to {
  opacity: 0;
}
</style>

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
.pilot-breadcrumb {
  display: flex;
  font-size: var(--pilot-breadcrumb-font-size, 14px);
  line-height: 1;
}

.pilot-breadcrumb__item {
  display: flex;
  align-items: center;

  .pilot-breadcrumb__inner {
    color: var(--pilot-breadcrumb-item-text-color, #606266);
  }

  .pilot-breadcrumb__inner.is-link,
  .pilot-breadcrumb__inner a {
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: var(--pilot-breadcrumb-item-link-text-color, #303133);
  }

  .pilot-breadcrumb__inner.is-link:hover,
  .pilot-breadcrumb__inner a:hover {
    color: var(--pilot-breadcrumb-item-link-hover-text-color, #409eff);
    cursor: pointer;
  }

  /* We use CSS to hide the separator of the last item */
  &:last-child .pilot-breadcrumb__separator {
    display: none;
  }
}

.pilot-breadcrumb__separator {
  margin: var(--pilot-breadcrumb-separator-margin, 0 9px);
  font-weight: 700;
  color: var(--pilot-breadcrumb-separator-color, #c0c4cc);

  &[class*='icon'] {
    margin: 0 6px;
    font-weight: normal;
  }
}
</style>

import { defineStore } from 'pinia';

// defineStore 的第一个参数是 store 的唯一 ID
export const useCounterStore = defineStore('counter', {
  // State: 必须是一个返回初始状态对象的函数
  state: () => ({
    count: 0,
  }),

  // Getters: 类似于组件的计算属性
  getters: {
    // getter 会接收 state 作为第一个参数
    doubleCount(state) {
      return state.count * 2;
    },
    // 也可以通过 `this` 访问其他 getter
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  },

  // Actions: 类似于组件的方法，可以包含异步操作
  actions: {
    // 在 action 中可以通过 `this` 访问 state
    increment() {
      this.count++;
    },
    // 也可以是异步 action
    async incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
});

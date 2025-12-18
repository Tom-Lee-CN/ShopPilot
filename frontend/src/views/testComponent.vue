<template>
  <div class="test-page-container">
    <h1>Infinite Scroll Test Page</h1>
    <div class="infinite-scroll-test-container">
      <h3>Test Case: Inside a Pilot-Scrollbar</h3>
      <pilot-scrollbar height="400px" class="scrollbar-container">
        <ul
          v-infinite-scroll="{
            handler: loadMore,
            disabled: noMore,
            delay: 500,
            distance: 10,
          }"
          class="infinite-list"
        >
          <li v-for="i in infiniteScrollCount" :key="i" class="infinite-list-item">{{ i }}</li>
        </ul>
        <p v-if="loading" class="loading-text">Loading...</p>
        <p v-if="noMore" class="no-more-text">No more items</p>
      </pilot-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestComponentView',
  data() {
    return {
      infiniteScrollCount: 20,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.infiniteScrollCount >= 80; // Stop loading when we have 80 items
    },
  },
  methods: {
    loadMore() {
      console.log('Load more triggered!'); // Add a log to check if handler is called
      this.loading = true;
      setTimeout(() => {
        this.infiniteScrollCount += 10; // Add 10 more items
        this.loading = false;
      }, 1500); // Simulate a network request
    },
  },
};
</script>

<style scoped>
.test-page-container {
  padding: 20px;
  font-family: sans-serif;
}

.infinite-scroll-test-container {
  width: 60%;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.scrollbar-container {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
}

.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #f0f9eb;
  margin: 10px;
  color: #67c23a;
  border-radius: 4px;
}

.loading-text,
.no-more-text {
  text-align: center;
  padding: 15px;
  color: #909399;
  font-size: 14px;
}
</style>

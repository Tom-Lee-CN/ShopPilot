<template>
  <pilot-container class="showcase-container">
    <pilot-aside width="200px" class="showcase-sidebar">
      <h3 class="sidebar-title">Components</h3>
      <ul>
        <li
          v-for="component in components"
          :key="component.name"
          :class="{ 'is-active': activeComponent === component.name }"
          @click="activeComponent = component.name"
        >
          {{ component.label }}
        </li>
      </ul>
    </pilot-aside>

    <pilot-main class="showcase-main">
      <div v-if="activeComponent === 'Button'">
        <ButtonDemo />
      </div>
      <div v-if="activeComponent === 'Icon'">
        <IconDemo />
      </div>
      <div v-if="activeComponent === 'Layout'">
        <LayoutDemo />
      </div>
      <div v-if="activeComponent === 'Link'">
        <LinkDemo />
      </div>
      <div v-if="activeComponent === 'Container'">
        <ContainerDemo />
      </div>
      <div v-if="activeComponent === 'Scrollbar'">
        <ScrollbarDemo />
      </div>
      <div v-if="activeComponent === 'InfiniteScroll'">
        <InfiniteScrollDemo />
      </div>
      <div v-if="activeComponent === 'Alert'">
        <AlertDemo />
      </div>
      <div v-if="activeComponent === 'Card'">
        <CardDemo />
      </div>
      <div v-if="activeComponent === 'Input'">
        <InputDemo />
      </div>
      <div v-if="activeComponent === 'Select'">
        <SelectDemo />
      </div>
      <div v-if="activeComponent === 'Radio'">
        <RadioDemo />
      </div>
      <div v-if="activeComponent === 'Switch'">
        <SwitchDemo />
      </div>
      <div v-if="activeComponent === 'Modal'">
        <ModalDemo />
      </div>
      <div v-if="activeComponent === 'Drawer'">
        <DrawerDemo />
      </div>
      <div v-if="activeComponent === 'Tabs'">
        <TabsDemo />
      </div>
      <div v-if="activeComponent === 'Breadcrumb'">
        <BreadcrumbDemo />
      </div>
      <div v-if="activeComponent === 'Loading'">
        <LoadingDemo />
      </div>
      <div v-if="activeComponent === 'MessageBox'">
        <MessageBoxDemo />
      </div>
    </pilot-main>
  </pilot-container>
</template>

<script>
// Import all the demo components
import ButtonDemo from './componentDemos/ButtonDemo.vue';
import IconDemo from './componentDemos/IconDemo.vue';
import LayoutDemo from './componentDemos/LayoutDemo.vue';
import LinkDemo from './componentDemos/LinkDemo.vue';
import ContainerDemo from './componentDemos/ContainerDemo.vue';
import ScrollbarDemo from './componentDemos/ScrollbarDemo.vue';
import InfiniteScrollDemo from './componentDemos/InfiniteScrollDemo.vue';
import AlertDemo from './componentDemos/AlertDemo.vue';
import CardDemo from './componentDemos/CardDemo.vue';
import InputDemo from './componentDemos/InputDemo.vue';
import SelectDemo from './componentDemos/SelectDemo.vue';
import RadioDemo from './componentDemos/RadioDemo.vue';
import SwitchDemo from './componentDemos/SwitchDemo.vue';
import ModalDemo from './componentDemos/ModalDemo.vue';
import DrawerDemo from './componentDemos/DrawerDemo.vue';
import TabsDemo from './componentDemos/TabsDemo.vue';
import BreadcrumbDemo from './componentDemos/BreadcrumbDemo.vue';
import LoadingDemo from './componentDemos/LoadingDemo.vue';
import MessageBoxDemo from './componentDemos/MessageBoxDemo.vue';

export default {
  name: 'ComponentView',
  components: {
    ButtonDemo,
    IconDemo,
    LayoutDemo,
    LinkDemo,
    ContainerDemo,
    ScrollbarDemo,
    InfiniteScrollDemo,
    AlertDemo,
    CardDemo,
    InputDemo,
    SelectDemo,
    RadioDemo,
    SwitchDemo,
    ModalDemo,
    DrawerDemo,
    TabsDemo,
    BreadcrumbDemo,
    LoadingDemo,
    MessageBoxDemo,
  },
  data() {
    return {
      activeComponent: 'Button', // Default component to show
      components: [
        { name: 'Button', label: 'Button' },
        { name: 'Icon', label: 'Icon' },
        { name: 'Link', label: 'Link' },
        { name: 'Layout', label: 'Layout (Row/Col)' },
        { name: 'Container', label: 'Container' },
        { name: 'Scrollbar', label: 'Scrollbar' },
        { name: 'InfiniteScroll', label: 'InfiniteScroll' },
        { name: 'Alert', label: 'Alert' },
        { name: 'Card', label: 'Card' },
        { name: 'Loading', label: 'Loading' },
        { name: 'MessageBox', label: 'MessageBox' },
        { name: 'Modal', label: 'Modal' },
        { name: 'Drawer', label: 'Drawer' },
        { name: 'Input', label: 'Input & Textarea' },
        { name: 'Radio', label: 'Radio' },
        { name: 'Select', label: 'Select' },
        { name: 'Switch', label: 'Switch' },
        { name: 'Tabs', label: 'Tabs' },
        { name: 'Breadcrumb', label: 'Breadcrumb' },
      ],
    };
  },
};
</script>

<style scoped>
.showcase-container {
  height: 100vh;
}

.showcase-sidebar {
  background-color: #f5f7fa;
  border-right: 1px solid #e6e6e6;
  padding: 10px;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  padding: 10px 15px;
  margin: 0;
}

.showcase-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.showcase-sidebar li {
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.showcase-sidebar li:hover {
  background-color: #ecf5ff;
}

.showcase-sidebar li.is-active {
  background-color: #409eff;
  color: white;
  font-weight: 600;
}

.showcase-main {
  padding: 20px;
  background-color: #ffffff;
}
</style>

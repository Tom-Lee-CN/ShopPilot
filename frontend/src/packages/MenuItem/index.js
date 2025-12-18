import PilotMenuItem from './menu-item.vue';

PilotMenuItem.install = (app) => {
  app.component(PilotMenuItem.name, PilotMenuItem);
};

export default PilotMenuItem;

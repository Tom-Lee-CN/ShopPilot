import PilotMenu from './menu.vue';

PilotMenu.install = (app) => {
  app.component(PilotMenu.name, PilotMenu);
};

export default PilotMenu;

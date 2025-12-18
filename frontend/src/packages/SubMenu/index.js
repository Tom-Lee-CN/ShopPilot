import PilotSubMenu from './sub-menu.vue';

PilotSubMenu.install = (app) => {
  app.component(PilotSubMenu.name, PilotSubMenu);
};

export default PilotSubMenu;

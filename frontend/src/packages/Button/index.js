import PilotButton from './button.vue';

PilotButton.install = (app) => {
  app.component(PilotButton.name, PilotButton);
};

export default PilotButton;

import PilotButton from './Button';
import PilotIcon from './Icon/icon.vue';

const components = [PilotButton, PilotIcon];

const install = (app) => {
  components.forEach((components) => {
    app.component(components.name, components);
  });
};

export default {
  install,
  ...components,
};

export { PilotButton, PilotIcon };

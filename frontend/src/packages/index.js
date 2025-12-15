import PilotButton from './Button';
import PilotIcon from './Icon';
import PilotAlert from './Alert';

const components = [PilotButton, PilotIcon, PilotAlert];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { PilotButton, PilotIcon, PilotAlert };

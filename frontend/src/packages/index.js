import PilotButton from './Button';
import PilotIcon from './Icon';
import PilotAlert from './Alert';
import PilotCard from './Card';

const components = [PilotButton, PilotIcon, PilotAlert, PilotCard];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { PilotButton, PilotIcon, PilotAlert, PilotCard };

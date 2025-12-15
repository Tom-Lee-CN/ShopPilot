import PilotButton from './Button';
import PilotIcon from './Icon';
import PilotAlert from './Alert';
import PilotCard from './Card';
import PilotInput from './Input';

const components = [PilotButton, PilotIcon, PilotAlert, PilotCard, PilotInput];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { PilotButton, PilotIcon, PilotAlert, PilotCard, PilotInput };

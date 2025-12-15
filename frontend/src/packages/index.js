import PilotButton from './Button';
import PilotIcon from './Icon';
import PilotAlert from './Alert';
import PilotCard from './Card';
import PilotInput from './Input';
import PilotTextarea from './Textarea';

const components = [PilotButton, PilotIcon, PilotAlert, PilotCard, PilotInput, PilotTextarea];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { PilotButton, PilotIcon, PilotAlert, PilotCard, PilotInput, PilotTextarea };

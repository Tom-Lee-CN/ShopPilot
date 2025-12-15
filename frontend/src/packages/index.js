import PilotButton from './Button';
import PilotIcon from './Icon';
import PilotAlert from './Alert';
import PilotCard from './Card';
import PilotInput from './Input';
import PilotTextarea from './Textarea';
import PilotSelect from './Select';
import PilotRadio from './Radio';
import PilotRadioGroup from './RadioGroup';

const components = [
  PilotButton,
  PilotIcon,
  PilotAlert,
  PilotCard,
  PilotInput,
  PilotTextarea,
  PilotSelect,
  PilotRadio,
  PilotRadioGroup,
];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export {
  PilotButton,
  PilotIcon,
  PilotAlert,
  PilotCard,
  PilotInput,
  PilotTextarea,
  PilotSelect,
  PilotRadio,
  PilotRadioGroup,
};

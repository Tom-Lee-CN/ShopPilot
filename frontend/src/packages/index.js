import PilotButton from './Button';
import PilotIcon from './Icon';
import PilotAlert from './Alert';
import PilotCard from './Card';
import PilotInput from './Input';
import PilotTextarea from './Textarea';
import PilotSelect from './Select';
import PilotRadio from './Radio';
import PilotRadioGroup from './RadioGroup';
import Row from './Row';
import Col from './Col';
import Modal from './Modal';
import PilotSwitch from './Switch';
// 从 './Tabs' 中同时导入默认的 PilotTabs 和命名的 PilotTabPane
import PilotTabs, { PilotTabPane } from './Tabs';
import PilotDrawer from './Drawer';
import PilotLoading from './Loading'; // 导入 Loading 插件

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
  Row,
  Col,
  Modal,
  PilotSwitch,
  PilotTabs,
  PilotTabPane,
  PilotDrawer,
];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  // 单独注册 Loading 指令插件
  app.use(PilotLoading);
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
  Row,
  Col,
  Modal,
  PilotSwitch,
  PilotTabs,
  PilotTabPane,
  PilotDrawer,
};

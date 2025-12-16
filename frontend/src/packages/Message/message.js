import { createVNode, render } from 'vue';
import MessageConstructor from './message.vue';

const instances = [];
const GAP_SIZE = 16;
let seed = 1;

const Message = (options) => {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  let topOffset = options.offset || 20;
  instances.forEach((instance) => {
    const el = instance.el;
    if (el) {
      topOffset += el.offsetHeight + GAP_SIZE;
    }
  });

  const id = `message_${seed++}`;
  const userOnClose = options.onClose;

  const container = document.createElement('div');
  document.body.appendChild(container);

  const props = {
    ...options,
    id,
    offset: topOffset,
    onClose: () => {
      handleClose(id, userOnClose);
    },
  };

  const vm = createVNode(MessageConstructor, props);

  vm.props.onDestroy = () => {
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx > -1) {
      const instance = instances[idx];
      render(null, instance.container);
      document.body.removeChild(instance.container);
      instances.splice(idx, 1);
    }
  };

  render(vm, container);

  const instance = {
    id,
    component: vm.component,
    container,
    get el() {
      // Use subTree.el to reliably get the component's root DOM element
      return vm.component?.subTree?.el;
    },
  };

  instances.push(instance);

  vm.component.proxy.visible = true;

  return {
    close: () => vm.component.proxy.close(),
  };
};

function handleClose(id, userOnClose) {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx === -1) return;

  const instance = instances[idx];
  if (userOnClose) {
    userOnClose(instance);
  }

  const el = instance.el;
  if (!el) return;

  const removedHeight = el.offsetHeight;

  for (let i = idx + 1; i < instances.length; i++) {
    const inst = instances[i];
    inst.component.proxy.offsetValue -= removedHeight + GAP_SIZE;
  }
}

export default Message;

<template>
  <div class="demo-page">
    <aside class="sidebar">
      <h2>Components</h2>
      <ul class="component-list">
        <li
          v-for="name in componentNames"
          :key="name"
          class="component-list-item"
          :class="{ active: activeComponent === name }"
          @click="activeComponent = name"
        >
          {{ name }}
        </li>
      </ul>
    </aside>

    <main class="content">
      <div v-if="activeComponent === 'Button'" class="demo-section">
        <h2>按钮 (Button)</h2>
        <pilot-button>默认按钮</pilot-button>
        <pilot-button type="primary">主要按钮</pilot-button>
        <pilot-button type="success">成功按钮</pilot-button>
        <pilot-button type="info">信息按钮</pilot-button>
        <pilot-button type="warning">警告按钮</pilot-button>
        <pilot-button type="danger">危险按钮</pilot-button>
        <br /><br />
        <pilot-button plain>朴素按钮</pilot-button>
        <pilot-button type="primary" plain>主要按钮</pilot-button>
        <br /><br />
        <pilot-button round>圆角按钮</pilot-button>
        <pilot-button type="primary" round>主要按钮</pilot-button>
        <br /><br />
        <pilot-button disabled>禁用按钮</pilot-button>
        <pilot-button type="primary" disabled>禁用按钮</pilot-button>
      </div>

      <div v-if="activeComponent === 'Alert'" class="demo-section">
        <h2>警告框 (Alert)</h2>
        <pilot-alert
          title="成功提示"
          type="success"
          description="这是一条成功的提示信息"
          show-icon
        />
        <pilot-alert title="信息提示" type="info" description="这是一条普通的信息提示" show-icon />
        <pilot-alert
          title="警告提示"
          type="warning"
          description="这是一条警告的提示信息"
          show-icon
        />
        <pilot-alert
          title="错误提示"
          type="danger"
          description="这是一条错误的提示信息"
          show-icon
          closable
        />
      </div>

      <div v-if="activeComponent === 'Card'" class="demo-section">
        <h2>卡片组件 (Card)</h2>
        <pilot-card header="卡片头部">
          <p>这是卡片的内容。</p>
          <p>可以放置任意内容。</p>
          <template v-slot:footer><p>sadads</p></template>
        </pilot-card>
      </div>

      <div v-if="activeComponent === 'Input'" class="demo-section">
        <h2>输入框 (Input)</h2>
        <pilot-input v-model="inputValue" placeholder="请输入内容" clearable style="width: 220px" />
        <br /><br />
        <pilot-input v-model="inputValue" placeholder="禁用状态" disabled style="width: 220px" />
      </div>

      <div v-if="activeComponent === 'Textarea'" class="demo-section">
        <h2>文本域 (Textarea)</h2>
        <pilot-textarea
          v-model="textareaValue"
          placeholder="请输入内容"
          :rows="3"
          show-word-limit
          maxlength="100"
          style="width: 300px"
        />
      </div>

      <div v-if="activeComponent === 'Radio'" class="demo-section">
        <h2>单选框 (Radio)</h2>
        <pilot-radio-group v-model="radioValue">
          <pilot-radio label="选项1">选项一</pilot-radio>
          <pilot-radio label="选项2">选项二</pilot-radio>
          <pilot-radio label="选项3" disabled>选项三 (禁用)</pilot-radio>
        </pilot-radio-group>
        <p>选中了: {{ radioValue }}</p>
      </div>

      <div v-if="activeComponent === 'Select'" class="demo-section">
        <h2>选择器 (Select)</h2>
        <pilot-select
          v-model="selectValue"
          :options="selectOptions"
          placeholder="请选择"
          style="width: 220px"
        />
        <br /><br />
        <pilot-select
          v-model="selectValue"
          :options="selectOptions"
          placeholder="禁用状态"
          disabled
          style="width: 220px"
        />
      </div>
      <div v-if="activeComponent === 'Modal'" class="demo-section">
        <h2>模态框 (Modal)</h2>
        <pilot-button type="primary" @click="modalVisible = true">打开模态框</pilot-button>
        <pilot-modal v-model="modalVisible" title="这是一个模态框">
          <p>这里是模态框的内容。</p>
          <p>你可以放置任何文本或组件。</p>
          <template #footer>
            <pilot-button @click="modalVisible = false">取消</pilot-button>
            <pilot-button type="primary" @click="modalVisible = false">确认</pilot-button>
          </template>
        </pilot-modal>
      </div>
      <div v-if="activeComponent === 'Message'" class="demo-section">
        <h2>消息提示 (Message)</h2>
        <pilot-button @click="showMessage('success')">成功</pilot-button>
        <pilot-button @click="showMessage('info')">消息</pilot-button>
        <pilot-button @click="showMessage('warning')">警告</pilot-button>
        <pilot-button @click="showMessage('danger')">错误</pilot-button>
      </div>
    </main>
  </div>
</template>

<script>
import PilotButton from '../packages/Button/button.vue';
import PilotAlert from '../packages/Alert/alert.vue';
import PilotCard from '../packages/Card/card.vue';
import PilotInput from '../packages/Input/input.vue';
import PilotTextarea from '../packages/Textarea/textarea.vue';
import PilotRadio from '../packages/Radio/radio.vue';
import PilotRadioGroup from '../packages/RadioGroup/radio-group.vue';
import PilotSelect from '../packages/Select/select.vue';

export default {
  name: 'HelloWorld',
  components: {
    PilotButton,
    PilotAlert,
    PilotCard,
    PilotInput,
    PilotTextarea,
    PilotRadio,
    PilotRadioGroup,
    PilotSelect,
  },
  data() {
    return {
      componentNames: [
        'Message',
        'Button',
        'Alert',
        'Card',
        'Input',
        'Textarea',
        'Radio',
        'Select',
        'Modal',
      ],
      activeComponent: 'Button',
      inputValue: '',
      textareaValue: '',
      radioValue: '选项1',
      selectValue: '',
      selectOptions: [
        { label: '选项一', value: 'option1' },
        { label: '选项二', value: 'option2' },
        { label: '选项三', value: 'option3' },
      ],
      modalVisible: false,
    };
  },
  methods: {
    showMessage(type) {
      this.$message({
        type: type,
        message: `这是一个 ${type} 123消息提示`,
        showClose: true,
      });
    },
  },
};
</script>

<style scoped>
.demo-page {
  display: flex;
  height: 100vh;
  font-family:
    'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '\\\\5FAE软雅黑', Arial, sans-serif;
}

.sidebar {
  width: 200px;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  background-color: #f7f7f7;
}

.sidebar h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.component-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.component-list-item {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.component-list-item:hover {
  background-color: #e9e9e9;
}

.component-list-item.active {
  background-color: #409eff;
  color: white;
}

.content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-section h2 {
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.pilot-button,
.pilot-input,
.pilot-textarea,
.pilot-select {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

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
      <div v-if="activeComponent === 'Switch'" class="demo-section">
        <h2>Switch (开关)</h2>
        <pilot-switch v-model="switchValue"></pilot-switch>
        <br /><br />
        <pilot-switch v-model="switchValue" disabled></pilot-switch>
        <br /><br />
        <pilot-switch
          v-model="switchValue"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></pilot-switch>
      </div>
      <div v-if="activeComponent === 'Tabs'" class="demo-section">
        <h2>Tabs (标签页)</h2>
        <pilot-tabs v-model="activeTabName">
          <pilot-tab-pane label="Tab 1" name="first"> Content of Tab 1 </pilot-tab-pane>
          <pilot-tab-pane label="Tab 2" name="second"> Content of Tab 2 </pilot-tab-pane>
          <pilot-tab-pane label="Tab 3" name="third"> Content of Tab 3 </pilot-tab-pane>
        </pilot-tabs>
      </div>
      <div v-if="activeComponent === 'Drawer'" class="demo-section">
        <h2>抽屉 (Drawer)</h2>
        <pilot-button @click="openDrawer('rtl')">从右边打开</pilot-button>
        <pilot-button @click="openDrawer('ltr')">从左边打开</pilot-button>
        <pilot-button @click="openDrawer('ttb')">从上边打开</pilot-button>
        <pilot-button @click="openDrawer('btt')">从下边打开</pilot-button>
        <br /><br />
        <pilot-button type="primary" @click="drawerWithConfirmVisible = true"
          >打开带确认的抽屉</pilot-button
        >

        <pilot-drawer
          v-model="drawerVisible"
          :direction="drawerDirection"
          title="我是标题"
          size="30%"
        >
          <p>一些内容...</p>
          <p>一些内容...</p>
          <p>一些内容...</p>
        </pilot-drawer>

        <pilot-drawer
          v-model="drawerWithConfirmVisible"
          title="关闭前确认"
          :before-close="handleDrawerClose"
        >
          <p>关闭这个抽屉需要确认</p>
        </pilot-drawer>

        <!-- 新增的确认模态框 -->
        <pilot-modal v-model="confirmModalVisible" title="确认关闭">
          <p>您确定要关闭抽屉吗？未保存的更改将会丢失。</p>
          <template #footer>
            <pilot-button @click="cancelCloseDrawer">取消</pilot-button>
            <pilot-button type="primary" @click="confirmCloseDrawer">确认</pilot-button>
          </template>
        </pilot-modal>
      </div>
      <div v-if="activeComponent === 'Loading'" class="demo-section">
        <h2>加载 (Loading)</h2>
        <div style="margin-bottom: 20px">
          <label>控制加载状态：</label>
          <pilot-switch v-model="isLoading"></pilot-switch>
        </div>
        <div class="loading-area" v-loading="isLoading" pilot-loading-text="正在努力加载中...">
          <p>这个区域的加载动画会带有自定义文字。</p>
        </div>

        <br /><br />
        <h3>表格加载 (Table Loading)</h3>
        <div class="table-container" v-loading="isLoading">
          <table>
            <thead>
              <tr>
                <th>日期</th>
                <th>姓名</th>
                <th>地址</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-10-26</td>
                <td>张三</td>
                <td>北京市朝阳区望京 SOHO</td>
              </tr>
              <tr>
                <td>2023-10-27</td>
                <td>李四</td>
                <td>上海市浦东新区陆家嘴</td>
              </tr>
              <tr>
                <td>2023-10-28</td>
                <td>王五</td>
                <td>广东省深圳市南山区科技园</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="activeComponent === 'MessageBox'" class="demo-section">
        <h2>消息弹框 (MessageBox)</h2>
        <p>通过函数式调用打开，返回一个 Promise。</p>
        <br />
        <pilot-button @click="openConfirmBox">打开确认框</pilot-button>
        <pilot-button @click="openAlertBox">打开提示框</pilot-button>
      </div>
      <div v-if="activeComponent === 'Container'" class="demo-section">
        <h2>布局容器 (Container)</h2>

        <h3>常见布局 1: Header, Main, Footer</h3>
        <pilot-container style="height: 200px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Header</pilot-header
          >
          <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 80px"
            >Main</pilot-main
          >
          <pilot-footer style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Footer</pilot-footer
          >
        </pilot-container>

        <h3>常见布局 2: Header, Aside, Main</h3>
        <pilot-container style="height: 300px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Header</pilot-header
          >
          <pilot-container>
            <pilot-aside
              width="200px"
              style="background-color: #d3dce6; text-align: center; line-height: 240px"
              >Aside</pilot-aside
            >
            <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 240px"
              >Main</pilot-main
            >
          </pilot-container>
        </pilot-container>

        <h3>常见布局 3: Header, Aside, Main, Footer</h3>
        <pilot-container style="height: 300px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Header</pilot-header
          >
          <pilot-container>
            <pilot-aside
              width="200px"
              style="background-color: #d3dce6; text-align: center; line-height: 180px"
              >Aside</pilot-aside
            >
            <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 180px"
              >Main</pilot-main
            >
          </pilot-container>
          <pilot-footer style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Footer</pilot-footer
          >
        </pilot-container>

        <h3>常见布局 4: Aside, Main</h3>
        <pilot-container style="height: 200px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-aside
            width="200px"
            style="background-color: #d3dce6; text-align: center; line-height: 200px"
            >Aside</pilot-aside
          >
          <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 200px"
            >Main</pilot-main
          >
        </pilot-container>

        <h3>常见布局 5: Aside, Header, Main</h3>
        <pilot-container style="height: 260px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-aside
            width="200px"
            style="background-color: #d3dce6; text-align: center; line-height: 260px"
            >Aside</pilot-aside
          >
          <pilot-container>
            <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
              >Header</pilot-header
            >
            <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 200px"
              >Main</pilot-main
            >
          </pilot-container>
        </pilot-container>

        <h3>常见布局 6: Aside, Header, Main, Footer</h3>
        <pilot-container style="height: 320px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-aside
            width="200px"
            style="background-color: #d3dce6; text-align: center; line-height: 320px"
            >Aside</pilot-aside
          >
          <pilot-container>
            <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
              >Header</pilot-header
            >
            <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 200px"
              >Main</pilot-main
            >
            <pilot-footer style="background-color: #b3c0d1; text-align: center; line-height: 60px"
              >Footer</pilot-footer
            >
          </pilot-container>
        </pilot-container>

        <h3 style="margin-top: 40px">常见布局 7: Header, Main, Aside (右)</h3>
        <pilot-container style="height: 300px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Header</pilot-header
          >
          <pilot-container>
            <pilot-aside
              width="200px"
              style="background-color: #d3dce6; text-align: center; line-height: 240px"
              >Aside</pilot-aside
            >
            <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 240px"
              >Main</pilot-main
            >
          </pilot-container>
        </pilot-container>
        <h3 style="margin-top: 40px">常见布局 8: Header, Main, 左右 Asides</h3>
        <pilot-container style="height: 300px; border: 1px solid #eee; margin-bottom: 20px">
          <pilot-header style="background-color: #b3c0d1; text-align: center; line-height: 60px"
            >Header</pilot-header
          >
          <pilot-container>
            <pilot-aside
              width="200px"
              style="background-color: #d3dce6; text-align: center; line-height: 240px"
              >Aside Left</pilot-aside
            >
            <pilot-main style="background-color: #e9eef3; text-align: center; line-height: 240px"
              >Main</pilot-main
            >
            <pilot-aside
              width="200px"
              style="background-color: #d3dce6; text-align: center; line-height: 240px"
              >Aside Right</pilot-aside
            >
          </pilot-container>
        </pilot-container>
      </div>
      <div v-if="activeComponent === 'Link'" class="demo-section">
        <h2>Link 链接</h2>
        <div style="display: flex; gap: 16px; margin-bottom: 20px">
          <pilot-link href="https://www.google.com" target="_blank">默认链接</pilot-link>
          <pilot-link type="primary">主要链接</pilot-link>
          <pilot-link type="success">成功链接</pilot-link>
          <pilot-link type="warning">警告链接</pilot-link>
          <pilot-link type="danger">危险链接</pilot-link>
          <pilot-link type="info">信息链接</pilot-link>
        </div>
        <div style="display: flex; gap: 16px; margin-bottom: 20px">
          <pilot-link disabled>禁用链接</pilot-link>
          <pilot-link type="primary" disabled>主要链接(禁用)</pilot-link>
        </div>
        <div style="display: flex; gap: 16px; margin-bottom: 20px">
          <pilot-link :underline="false">无下划线</pilot-link>
          <pilot-link type="primary" :underline="false">主要链接(无下划线)</pilot-link>
        </div>
        <div style="display: flex; gap: 16px; margin-bottom: 20px">
          <pilot-link icon="el-icon-edit">编辑</pilot-link>
          <pilot-link>查看<i class="el-icon-view el-icon--right"></i> </pilot-link>
        </div>
      </div>
      <div v-if="activeComponent === 'Notification'" class="demo-section">
        <h2>通知 (Notification)</h2>
        <div style="margin-bottom: 20px">
          <pilot-button @click="openNotification('success')">Success</pilot-button>
          <pilot-button @click="openNotification('warning')">Warning</pilot-button>
          <pilot-button @click="openNotification('info')">Info</pilot-button>
          <pilot-button @click="openNotification('error')">Error</pilot-button>
        </div>
        <div>
          <pilot-button @click="openNotification('success', 'top-right')">Top Right</pilot-button>
          <pilot-button @click="openNotification('success', 'top-left')">Top Left</pilot-button>
          <pilot-button @click="openNotification('success', 'bottom-right')"
            >Bottom Right</pilot-button
          >
          <pilot-button @click="openNotification('success', 'bottom-left')"
            >Bottom Left</pilot-button
          >
          <pilot-button @click="openAutoCloseNotification">不会自动关闭的通知</pilot-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  data() {
    return {
      componentNames: [
        'Message',
        'Button',
        'Link',
        'Alert',
        'Card',
        'Input',
        'Textarea',
        'Radio',
        'Select',
        'Modal',
        'Switch',
        'Tabs',
        'Drawer',
        'Loading',
        'MessageBox',
        'Container',
        'Notification',
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
      switchValue: true,
      activeTabName: 'first', // 添加 activeTabName 属性
      drawerVisible: false,
      drawerDirection: 'rtl',
      drawerWithConfirmVisible: false,
      confirmModalVisible: false, // 控制确认模态框的显示
      closeDrawerCallback: null, // 存储 before-close 的 done 回调
      isLoading: false, // 为 Loading 指令添加状态
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
    openDrawer(direction) {
      this.drawerDirection = direction;
      this.drawerVisible = true;
    },
    handleDrawerClose(done) {
      this.confirmModalVisible = true;
      this.closeDrawerCallback = done;
    },
    confirmCloseDrawer() {
      if (this.closeDrawerCallback) {
        this.closeDrawerCallback(); // 执行关闭抽屉的操作
      }
      this.confirmModalVisible = false;
      this.closeDrawerCallback = null;
    },
    cancelCloseDrawer() {
      this.confirmModalVisible = false;
      this.closeDrawerCallback = null;
    },
    async openConfirmBox() {
      try {
        await this.$messageBox({
          title: '确认操作',
          message: '您确定要执行此操作吗？',
          showCancelButton: true,
        });
        this.$message({ type: 'success', message: '用户点击了确认' });
      } catch (action) {
        this.$message({ type: 'info', message: `操作已取消 (${action})` });
      }
    },
    async openAlertBox() {
      try {
        await this.$messageBox({
          title: '提示',
          message: '这是一个提示信息。',
        });
        this.$message({ type: 'success', message: '用户点击了确定' });
      } catch (action) {
        this.$message({ type: 'info', message: `弹窗已关闭 (${action})` });
      }
    },
    openNotification(type, position) {
      this.$notify({
        title: 'Notification Title',
        message: 'This is a notification message. It will close automatically.',
        type: type,
        duration: 3000,
        position: position,
      });
    },
    openAutoCloseNotification() {
      this.$notify({
        title: '持久通知',
        message: '我不会自动消失',
        duration: 0,
        type: 'info',
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
.loading-area {
  border: 1px solid #ebeef5;
  padding: 20px;
  border-radius: 4px;
  min-height: 150px; /* 给一个最小高度以方便查看效果 */
  width: 100%;
}

.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

th,
td {
  border: 1px solid #ebeef5;
  padding: 12px 15px;
  text-align: left;
}

thead {
  background-color: #f5f7fa;
  color: #909399;
}
</style>

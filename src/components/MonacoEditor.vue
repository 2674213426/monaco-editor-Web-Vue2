<template>
  <div id="codeEditing">
    <!-- 选择代码 -->
    <select @change="modifyLanguageType">
      <option v-for="(value, index) in modesIds" :key="index" :value="value">
        {{ value }}
      </option>
    </select>
    <!-- / 选择代码 -->

    <!-- 代码编辑器 -->
    <div id="container"></div>
    <!-- / 代码编辑器 -->

    <!-- 提交按钮 -->
    <button @click="submitA">提交</button>
    <!-- / 提交按钮 -->
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {

  /**
   * 数据
   */
  data() {
    return {
      editor: null, // 文本编辑器
      modesIds: null, // 语言列表
      oldValue: '', // 保存后的文本
      languageType: '', // 语言类型
    }
  },

  /**
   * mounted 钩子函数
   */
  mounted() {
    this.initEditor() // 初始化网页代码编辑器
  },

  /**
   * 方法
   */
  methods: {

    /* 提交按钮 */
    submitA() {
      this.saveEditor()  // 修改数据

      console.log(`代码类型:${this.languageType}, 代码: ${this.oldValue}`)
    },

    /* 修改语言类型 */
    modifyLanguageType(e) {
      this.languageType = e.target.value // 获取到的 语言id 赋值给本地
      var oldModel = this.editor.getModel() // 获取旧模型
      var value = this.editor.getValue() // 获取旧的文本
      /* modesIds即为支持语言
          var modesIds = monaco.languages.getLanguages().map(function(lang) { return lang.id; }); */
      var newModel = monaco.editor.createModel(value, this.languageType)

      // 销毁旧模板
      if (oldModel) {
        oldModel.dispose()
      }

      // 设置新模型
      this.editor.setModel(newModel)
    },

    /* 初始化网页代码编辑器 */
    initEditor() {

      // 代码 ID 栗子：['java', 'javascript']; java || javascript 称为 id 下面操作获取全部
      var modesIds = monaco.languages.getLanguages().map(function (lang) {
        return lang.id
      })

      this.modesIds = modesIds

      // 初始化编辑器，确保dom已经渲染
      this.editor = monaco.editor.create(document.getElementById('container'), {
        value: '', // 编辑器初始显示文字
        language: 'javascript', // 语言支持自行查阅demo
        theme: 'vs-dark', // 官方自带三种主题vs, hc-black, or vs-dark
        selectOnLineNumbers: true, // 显示行号
        roundedSelection: false,
        readOnly: false, // 只读
        cursorStyle: 'line', // 光标样式
        automaticLayout: false, // 自动布局
        glyphMargin: true, // 字形边距
        useTabStops: false,
        fontSize: 28, // 字体大小
        autoIndent: true, // 自动缩进
        quickSuggestionsDelay: + new Date(), // 代码提示延时
      })
    },

    /* 获取编辑器内容 */
    getValue() {
      this.editor.getValue() // 获取编辑器中的文本
    },

    /* 保存编辑器状态修改 */
    saveEditor() {
      this.oldValue = this.editor.getValue()
    },
  },
}
</script>

<style lang="less" scoped>

/* 宽高按照需求自定义 */
#container {
  width: 100%;
  height: 500px;
}
</style>

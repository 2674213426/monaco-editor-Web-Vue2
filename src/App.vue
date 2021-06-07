<template>
  <div id="app">
    <MonacoEditor :callback1='callback1' />
  </div>
</template>

<script>
import MonacoEditor from '@/components/MonacoEditor'

export default {
  name: 'App',

  components: {
    MonacoEditor
  },

  methods: {
    callback1 (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

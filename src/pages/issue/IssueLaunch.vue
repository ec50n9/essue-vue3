<script setup lang="ts">
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {onBeforeUnmount, onMounted, ref, shallowRef} from 'vue'
import Button from "../../components/EcButton.vue";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = {placeholder: '请输入内容...'}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<template>
  <div class="title mt-8">
    <h2 class="text-5xl text-gray-700">发起提问</h2>
    <p class="mt-4 mb-8 text-lg text-gray-500">有问题咱敞开来说～</p>
  </div>
  <div class="grid grid-cols-12 gap-8">
    <!--标题-->
    <div class="col-span-12">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">标题</label>
      <input type="text" id="title"
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="电脑开不了机" required>
    </div>
    <!--内容-->
    <div class="col-span-12">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">问题详情</label>
      <div style="border: 1px solid #ccc">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"/>
        <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"/>
      </div>
    </div>
    <!--联系方式-->
    <div class="col-span-4">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">联系方式</label>
      <select id="contact"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>请选择联系方式</option>
        <option value="US">微信</option>
        <option value="CA">QQ</option>
        <option value="FR">电话</option>
      </select>
    </div>
    <!--号码-->
    <div class="col-span-8">
      <label for="contact-value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">号码</label>
      <input type="text" id="contact-value"
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="电脑开不了机" required>
    </div>
    <!--提交-->
    <div class="col-span-12 flex justify-end gap-4">
      <Button type="primary" outlined @click="$router.back()">返回</Button>
      <Button type="primary">发起</Button>
    </div>
  </div>
</template>

<style scoped>

</style>
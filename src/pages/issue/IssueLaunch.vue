<script setup lang="ts">
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {onBeforeUnmount, onMounted, ref, shallowRef} from 'vue'
import Button from "../../components/EcButton.vue";
import issueCategoryService from "../../http/IssueCategoryService";
import toast from "../../components/toast";
import issueService from "../../http/IssueService";
import router from "../../router";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const toolbarConfig = {}
const editorConfig = {placeholder: '请输入内容...'}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

// wang editor组件创建事件
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// 初始化
const formData = ref({
  title: '',
  content: '',
  categoryId: '',
  contactWay: '',
  contactNumber: ''
})
const categoryList = ref([])

const init = async ()=>{
  const {data} = await issueCategoryService.findAll()
  if (data.success){
    console.log(data.data)
    categoryList.value = data.data
  }else {
    toast.error("获取分类列表失败")
  }
}

onMounted(init)

// 提交事件
const commitHandler = ()=>{
  issueService.newOne(formData.value).then(({data})=>{
    const issueDetail = data.data
    router.back()
  })
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
      <input type="text" id="title" v-model="formData.title"
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
            :defaultConfig="toolbarConfig"/>
        <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="formData.content"
            :defaultConfig="editorConfig"
            @onCreated="handleCreated"/>
      </div>
    </div>
    <!--分类-->
    <div class="col-span-12">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">分类</label>
      <select id="contact"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="formData.categoryId">
        <option value="" selected>请选择分类</option>
        <option v-for="item in categoryList" :key="item.code" :value="item.code">{{item.name}}</option>
      </select>
    </div>
    <!--联系方式-->
    <div class="col-span-4">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">联系方式</label>
      <select id="contact" v-model="formData.contactWay"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" selected>请选择联系方式</option>
        <option value="wechat">微信</option>
        <option value="qq">QQ</option>
        <option value="phone">电话</option>
      </select>
    </div>
    <!--号码-->
    <div class="col-span-8">
      <label for="contact-value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">号码</label>
      <input type="text" id="contact-value" v-model="formData.contactNumber"
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="电脑开不了机" required>
    </div>
    <!--提交-->
    <div class="col-span-12 flex justify-end gap-4">
      <Button type="primary" outlined @click="$router.back()">返回</Button>
      <Button type="primary" @click="commitHandler">发起</Button>
    </div>
  </div>
</template>

<style scoped>

</style>
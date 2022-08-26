<script setup lang="ts">
import EcTag from "../../components/EcTag.vue";

const props = defineProps<{
  id: string
}>()

const issue = {
  title: '电脑开始蓝屏，重启也一样',
  content: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
  author: {
    username: 'ec50n9',
    nickname: 'shello',
    avatar: '/vite.svg'
  },
  createdTime: '今日早些时候',
  tags: [
    {text: '🔥 热门', color: 'red'},
    {text: '#日落', color: 'green'},
    '#篮球'
  ],
  voteCount: 76,
  commentCount: 11
}
</script>

<template>
  <!--标题-->
  <h1 class="mt-8 text-5xl text-gray-700">{{ issue.title }}</h1>
  <!--分割线-->
  <div class="h-1 my-8 bg-gray-100 rounded-full"></div>
  <!--作者标签-->
  <div class="mb-8 flex flex-wrap items-center justify-end gap-x-4">
    <img class="inline-block align-middle w-12 h-12 rounded-full ring-4 ring-gray-100" :src="issue.author.avatar"
         alt="avatar">
    <EcTag size="lg" color="blue">🧑‍💻 {{ issue.author.nickname }}</EcTag>
    <EcTag size="lg" color="yellow">🕒 {{ issue.createdTime }}</EcTag>
    <div class="flex-grow w-1/12"></div>
    <EcTag size="md" color="blue">👍 {{ issue.voteCount }} 点赞</EcTag>
    <EcTag size="md" color="yellow">💬 {{ issue.commentCount }} 评论</EcTag>
    <div class="space-x-4">
      <EcTag v-for="tag in issue.tags" size="md" :color="typeof tag === 'string' ? 'gray': tag.color">
        {{ typeof tag === 'string' ? tag : tag.text }}
      </EcTag>
    </div>
  </div>
  <!--文章内容-->
  <article class="prose lg:prose-xl" v-html="issue.content"/>
  <!--分割线-->
  <div class="h-1 my-8 bg-gray-100 rounded-full"></div>
  <!--评论列表-->
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <!--评论框-->
  <form>
    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
        <label for="comment" class="sr-only">你的评论</label>
        <textarea id="comment" rows="4"
                  class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="聊聊你的见解..." required></textarea>
      </div>
      <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
        <button type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          发表评论
        </button>
        <div class="flex pl-0 space-x-1 sm:pl-2">
          <button type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">附件</span>
          </button>
          <button type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">定位</span>
          </button>
          <button type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">上传图片</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>
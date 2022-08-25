<script setup lang="ts">
import EssueItem from "../components/EssueItem.vue";

const dataList: MixtureListItem[] = [
  {
    type: {text: '知识', color: 'blue'},
    title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    covers:['sunset.jpeg', 'temp.png', 'vite.svg'],
    author:'ec50n9',
    date: '三天前',
    tags: [
      {text: '🔥 热门', color: 'red'},
      {text: '#日落', color: 'green'},
      '#篮球'
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '问题', color: 'red'},
    title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    covers:['nature.jpeg'],
    date: '三天前',
    tags: [
      {text: '#日落', color: 'green'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '广场', color: 'green'},
    title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    date: '三天前',
    tags: [
      {text: '#广青', color: 'green'},
      '#篮球',
      {text: '#烧烤', color: 'red'}
    ],
    voteCount: 76,
    commentCount: 11
  },{
    type: {text: '知识', color: 'blue'},
    title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    covers:['sunset.jpeg', 'temp.png', 'vite.svg'],
    author:'ec50n9',
    date: '三天前',
    tags: [
      {text: '🔥 热门', color: 'red'},
      {text: '#日落', color: 'green'},
      '#篮球'
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '问题', color: 'red'},
    title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    covers:['nature.jpeg'],
    date: '三天前',
    tags: [
      {text: '#日落', color: 'green'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '广场', color: 'green'},
    title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    date: '三天前',
    tags: [
      {text: '#广青', color: 'green'},
      '#篮球',
      {text: '#烧烤', color: 'red'}
    ],
    voteCount: 76,
    commentCount: 11
  }
]
</script>

<template>
  <div class="title mt-8">
    <h2 class="text-5xl text-gray-700">别来无恙！</h2>
    <p class="mt-4 mb-8 text-lg text-gray-500">快来看看今天有什么新鲜事吧！</p>
  </div>
  <div class="banner h-64 rounded-xl bg-blue-100 overflow-hidden shadow-lg shadow-gray-300">
    <img class="w-full h-full object-cover" src="/nature.jpeg" alt="banner">
  </div>
  <ul class="list mt-4">
    <li v-for="(item, index) in dataList" :key="index">
      <EssueItem :data="item"></EssueItem>
    </li>
  </ul>
</template>

<style scoped>
</style>
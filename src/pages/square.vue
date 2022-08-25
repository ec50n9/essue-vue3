<script setup lang="ts">
import QuickEditor from "../components/QuickEditor.vue";
import EssueItem from "../components/EssueItem.vue";

const dataList: MixtureListItem[] = [
  {
    title: '🌄 我在广青贩卖日落',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    covers:['sunset.jpeg', 'temp.png', 'nature.jpeg'],
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
    title: '🥤一饭蜜雪冰城也太好喝了叭！！',
    preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
    covers:['nature.jpeg'],
    date: '三天前',
    tags: [
      {text: '#日落', color: 'green'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    title: '今天上课忘记带书了，被老师点名，尴尬死😅',
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
    <h2 class="text-5xl text-gray-700">广场</h2>
    <p class="mt-4 mb-8 text-lg text-gray-500">茶余饭后来逛逛！</p>
  </div>
  <!--编辑框-->
  <div class="p-2 rounded-xl bg-white ring-4 ring-blue-300 flex gap-4">
    <div class="flex-grow">
      <QuickEditor></QuickEditor>
    </div>
    <button class="px-6 bg-blue-500 text-gray-100 rounded-xl">发送</button>
  </div>
<!--列表-->
  <ul class="list mt-4">
    <li v-for="(item, index) in dataList" :key="index">
      <EssueItem :data="item"></EssueItem>
    </li>
  </ul>
</template>
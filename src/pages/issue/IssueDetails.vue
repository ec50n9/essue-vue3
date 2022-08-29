<script setup lang="ts">
import EcTag from "../../components/EcTag.vue";
import {onMounted, ref} from "vue";
import issueService from "../../http/IssueService";
import {Time} from "../../utils/time";
import CommentBox from "../../components/CommentBox.vue";

const props = defineProps<{
  id: string
}>()

let issue = ref({
  title: '',
  content: '',
  author: {
    username: '',
    nickname: '',
    avatar: ''
  },
  launchedAt: '',
  tags: [],
  voteCount: 0,
  commentCount: 0
})
let comments = ref<any[]>([])

const back = {
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

const editingComment = ref('')
// 发送评论
const commentSubmit = async () => {
  console.log(editingComment.value)
  const {data: {data: _comment}} = await issueService.createComment(props.id, editingComment.value)
  comments.value.push(_comment)
}

const init = async () => {
  // 获取问题详情
  const {data: {data: _issue}} = await issueService.findOne(props.id)
  _issue.launchedAt = Time.getFormatTime(new Date(_issue.launchedAt).getTime())
  issue.value = _issue

  // 获取评论列表
  const {data: {data: _comments}} = await issueService.getCommentsById(props.id)
  comments.value = _comments
}
onMounted(init)
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
    <EcTag size="lg" color="yellow">🕒 {{ issue.launchedAt }}</EcTag>
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
    <li v-for="comment in comments" :key="comment.id">{{ comment.content }}</li>
  </ul>
  <!--评论框-->
  <CommentBox v-model="editingComment" @onSubmit="commentSubmit"/>
</template>

<style scoped>

</style>
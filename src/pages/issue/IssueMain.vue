<script setup lang="ts">
import EssueItem from "../../components/EssueItem.vue";
import issueService from "../../http/IssueService";
import {ref} from "vue";
import {Time} from "../../utils/time";
import EcPagination from "../../components/EcPagination.vue";

const categoryColor = (categoryName: string) => {
  switch (categoryName) {
    case '硬件':
      return 'yellow'
    case '软件':
      return 'blue'
    default:
      return 'gray'
  }
}

const pagination = ref({
  current: 1,
  total: 10,
  size: 10
})

const paginationChangeHandler = (newValue: { current: number, total: number, size: number }) => {
  pagination.value = newValue
  refreshIssueList()
}

const issueList = ref<MixtureListItem[]>([])

const refreshIssueList = () => {
  issueService.findAllWithPaging(pagination.value.current, pagination.value.size).then(({data}) => {
    pagination.value.current = data.data.current
    pagination.value.size = data.data.size
    pagination.value.total = data.data.total

    issueList.value.length = 0
    data.data.content.forEach((issue: { commentCount: number; voteCount: number; id: any; categoryName: any; title: any; launchedAt: string | number | Date; }) => {
      issueList.value.push({
        id: issue.id,
        type: {text: issue.categoryName, color: categoryColor(issue.categoryName)},
        title: issue.title,
        date: Time.getFormatTime(new Date(issue.launchedAt).getTime()),
        voteCount: issue.voteCount,
        commentCount: issue.commentCount
      })
    })
  })
}

refreshIssueList()

const dataList: MixtureListItem[] = [
  {
    type: {text: '软件', color: 'blue'},
    title: 'office 2010 突然打不开，报错',
    preview: 'office 2010 突然打不开，报错',
    date: '三天前',
    tags: [
      {text: '🔥 着急', color: 'red'},
      {text: '#有偿', color: 'green'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '硬件', color: 'yellow'},
    title: '电脑开机蓝屏，重启也一样',
    preview: '电脑开机蓝屏，重启也一样',
    date: '片刻前',
    tags: [
      {text: '#有偿', color: 'green'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '软件', color: 'blue'},
    title: '电脑连网线但无法上网',
    date: '两个小时前',
    tags: [
      {text: '#多人遇到', color: 'yellow'},
      {text: '#有难度', color: 'red'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '软件', color: 'blue'},
    title: 'office 2010 突然打不开，报错',
    preview: 'office 2010 突然打不开，报错',
    date: '三天前',
    tags: [
      {text: '🔥 着急', color: 'red'},
      {text: '#有偿', color: 'green'}
    ],
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '硬件', color: 'yellow'},
    title: '电脑开机蓝屏，重启也一样',
    preview: '电脑开机蓝屏，重启也一样',
    date: '片刻前',
    voteCount: 76,
    commentCount: 11
  }, {
    type: {text: '软件', color: 'blue'},
    title: '电脑连网线但无法上网',
    date: '两个小时前',
    tags: [
      {text: '#多人遇到', color: 'yellow'},
      {text: '#有难度', color: 'red'}
    ],
    voteCount: 76,
    commentCount: 11
  }
]
</script>

<template>
  <div class="title mt-8">
    <h2 class="text-5xl text-gray-700">问答板块</h2>
    <p class="mt-4 text-lg text-gray-500">遇到问题啦？大伙一起来解决！</p>
  </div>
  <div class="banner my-8 py-8 rounded-xl bg-blue-100 text-gray-500
                    flex items-center shadow-lg shadow-blue-50">
    <div class="grow text-center">
      <p>已解决</p>
      <p class="mt-1 text-3xl text-gray-700">34</p>
    </div>
    <div class="h-12 w-0.5 bg-indigo-300"></div>
    <div class="grow text-center">
      <p>待解决</p>
      <p class="mt-1 text-3xl text-gray-700">7</p>
    </div>
    <div class="h-12 w-0.5 bg-indigo-300"></div>
    <div class="grow text-center">
      <RouterLink to="/issues/launch">
        <button class="px-8 py-4 rounded-md bg-blue-500 text-gray-100 hover:ring-4">发起问题</button>
      </RouterLink>
    </div>
  </div>
  <!-- 问题列表 -->
  <ul class="list mt-4">
    <li v-for="(item, index) in issueList" :key="index">
      <EssueItem :data="item"></EssueItem>
    </li>
  </ul>
  <EcPagination :pagination="pagination" @onChange="paginationChangeHandler"/>
</template>

<style scoped>

</style>
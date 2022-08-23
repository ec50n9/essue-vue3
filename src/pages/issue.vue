<script setup lang="ts">

interface IssueListItem {
    type: 'hardware' | 'software',
    title: string,
    preview?: string,
    date: string,
    tags: (string | { text: string, class: string })[],
    voteCount: number,
    commentCount: number
}

const dataList: IssueListItem[] = [
    {
        type: 'software',
        title: 'office 2010 突然打不开，报错',
        preview: 'office 2010 突然打不开，报错',
        date: '三天前',
        tags: [
            { text: '🔥 着急', class: 'tag--red' },
            { text: '#有偿', class: 'tag--green' }
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'hardware',
        title: '电脑开机蓝屏，重启也一样',
        preview: '电脑开机蓝屏，重启也一样',
        date: '片刻前',
        tags: [
            { text: '#有偿', class: 'tag--green' }
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'software',
        title: '电脑连网线但无法上网',
        date: '两个小时前',
        tags: [
            { text: '#多人遇到', class: 'tag--yellow' },
            { text: '#有难度', class: 'tag--red' }
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'software',
        title: 'office 2010 突然打不开，报错',
        preview: 'office 2010 突然打不开，报错',
        date: '三天前',
        tags: [
            { text: '🔥 着急', class: 'tag--red' },
            { text: '#有偿', class: 'tag--green' }
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'hardware',
        title: '电脑开机蓝屏，重启也一样',
        preview: '电脑开机蓝屏，重启也一样',
        date: '片刻前',
        tags: [
            { text: '#有偿', class: 'tag--green' }
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'software',
        title: '电脑连网线但无法上网',
        date: '两个小时前',
        tags: [
            { text: '#多人遇到', class: 'tag--yellow' },
            { text: '#有难度', class: 'tag--red' }
        ],
        voteCount: 76,
        commentCount: 11
    }
]

const type2Tag = (type: IssueListItem['type']) => {
    const obj = {
        software: { class: 'tag--blue', text: '软件' },
        hardware: { class: 'tag--red', text: '硬件' }
    }
    return obj[type]
}
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
            <RouterLink to="/issues">
                <button class="px-8 py-4 rounded-md bg-blue-500 text-gray-100 hover:ring-4">发起问题</button>
            </RouterLink>
        </div>
    </div>
    <!-- 问题列表 -->
    <ul class="list mt-4">
        <li v-for="(item, index) in dataList" :key="index">
            <div class="card py-4 flex flex-col gap-4">
                <h3 class="text-xl"><span class="tag tag--normal"
                        :class="type2Tag(item.type).class||'tag--blue'">{{type2Tag(item.type).text}}</span>
                    {{ item.title }}</h3>
                <p v-if="item.preview" class="text-gray-500 tracking-wide">
                    {{ item.preview }}
                </p>
                <div class="flex items-center gap-3 text-gray-500">
                    <div class="tag tag--gray">{{ item.date }}</div>
                    <div class="flex-grow"></div>
                    <div v-for="tag in item.tags" class="tag tag--red" :class="tag.class || 'tag--blue'">
                        {{ tag.text || tag }}</div>
                    <div class="tag tag--blue">👍 {{ item.voteCount }} 点赞</div>
                    <div class="tag tag--yellow">💬 {{ item.commentCount }} 评论</div>
                </div>
            </div>
        </li>
    </ul>
</template>
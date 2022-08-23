<script setup lang="ts">

interface MixtureListItem {
    type: 'wiki' | 'issue' | 'square',
    title: string,
    preview: string,
    date: string,
    tags: (string | { text: string, class: string })[],
    voteCount: number,
    commentCount: number
}

const dataList: MixtureListItem[] = [
    {
        type: 'wiki',
        title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
        preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
        date: '三天前',
        tags: [
            { text: '🔥 热门', class: 'tag--red' },
            { text: '#日落', class: 'tag--green' },
            '#篮球'
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'issue',
        title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
        preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
        date: '三天前',
        tags: [
            { text: '#日落', class: 'tag--green' }
        ],
        voteCount: 76,
        commentCount: 11
    }, {
        type: 'square',
        title: '如何评价全新的 ARC 浏览器，号称要重新定义网页？',
        preview: '少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫 网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） 缺点（The bad）过于美貌（…',
        date: '三天前',
        tags: [
            { text: '#广青', class: 'tag--green' },
            '#篮球',
            {text: '#烧烤', class:'tag--red'}
        ],
        voteCount: 76,
        commentCount: 11
    }
]

const type2Tag = (type: MixtureListItem['type']) => {
    const obj = {
        wiki: { class: 'tag--blue', text: '文章' },
        issue: { class: 'tag--red', text: '问题' },
        square: { class: 'tag--green', text: '广场' }
    }
    return obj[type]
}
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
            <div class="card py-4 flex flex-col gap-4">
                <h3 class="text-xl"><span
                        class="tag tag--normal" :class="type2Tag(item.type).class||'tag--blue'">{{type2Tag(item.type).text}}</span>
                    {{ item.title }}</h3>
                <p class="text-gray-500 tracking-wide">
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

<style scoped>
</style>
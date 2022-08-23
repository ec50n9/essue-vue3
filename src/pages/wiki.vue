<script setup lang="ts">
const dataList = [
    {},
    {},
    {},
    {}
]
</script>

<template>
    <div class="title mt-8">
        <h2 class="text-5xl text-gray-700">知识库</h2>
        <p class="mt-4 mb-8 text-lg text-gray-500">今天也是摄取知识的一天呢！</p>
    </div>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <li v-for="(item, index) in dataList" class="relative h-48 bg-blue-100 rounded-2xl overflow-hidden">
            <img class="absolute w-full h-full object-cover" src="nature.jpeg" alt="bg">
            <div class="relative z-10 h-full flex flex-col justify-end p-8">
                <h2 class="text-2xl text-gray-100">电脑基础手册</h2>
            </div>
        </li>
    </ul>
</template>
<script setup lang="ts">
import EcTag from "./EcTag.vue";

const props = defineProps<{ data: MixtureListItem }>()
</script>

<template>
  <div class="card py-6 flex flex-col gap-4">
    <h3 class="text-xl">
      <EcTag v-if="data.type" size="md" :color="typeof data.type==='string'?'blue': data.type.color">
        {{ typeof data.type === 'string' ? data.type : data.type.text }}
      </EcTag>
      <RouterLink :to="'/issues/'+data.id" class="ml-2">{{ data.title }}</RouterLink>
    </h3>
    <!--封面和预览内容-->
    <div v-if="data.covers||data.preview" class="flex gap-4">
      <div v-if="data.covers" class="flex-shrink-0 flex-grow flex justify-between gap-4">
        <img v-for="(cover, index) in data.covers" :key="index" :src="cover" :alt="cover"
             class="flex-grow h-32 object-cover rounded-xl shadow shadow-blue-100">
      </div>
      <p v-if="data.preview&&(!data.covers||data.covers.length<=1)" class="flex-grow text-gray-500 tracking-wide">
        <span v-html="data.preview"></span>
      </p>
    </div>
    <div class="flex items-center gap-3 text-gray-500">
      <EcTag size="sm" color="gray">{{data.date}}</EcTag>
      <EcTag v-if="data.author" size="sm" color="gray">@{{ data.author }}</EcTag>
      <div class="flex-grow"></div>
      <EcTag v-for="tag in data.tags" size="sm" :color="typeof tag==='string'?'blue':tag.color">
        {{ typeof tag === 'string' ? tag : tag.text }}
      </EcTag>
      <EcTag size="sm" color="blue">👍 {{ data.voteCount }} 点赞</EcTag>
      <EcTag size="sm" color="yellow">💬 {{ data.commentCount }} 评论</EcTag>
    </div>
  </div>
  <div class="h-0.5 bg-gray-100 rounded-full"></div>
</template>

<style scoped>

</style>
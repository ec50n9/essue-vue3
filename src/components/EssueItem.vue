<script setup lang="ts">
const props = defineProps<{ data: MixtureListItem }>()
</script>

<template>
  <div class="card py-4 flex flex-col gap-4">
    <h3 class="text-xl"><span v-if="data.type" class="tag tag--normal"
                              :class="typeof data.type==='string'?'tag--blue': data.type.class">{{
        typeof data.type === 'string' ? data.type : data.type.text
      }}</span>
      {{ data.title }}</h3>
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
      <div class="tag tag--gray">{{ data.date }}</div>
      <div v-if="data.author" class="w-fit tag tag--gray text-gray-500">@{{ data.author }}</div>
      <div class="flex-grow"></div>
      <div v-for="tag in data.tags" class="tag tag--red" :class="typeof tag==='string'?'tag--blue':tag.class">
        {{ typeof tag === 'string' ? tag : tag.text }}
      </div>
      <div class="tag tag--blue">👍 {{ data.voteCount }} 点赞</div>
      <div class="tag tag--yellow">💬 {{ data.commentCount }} 评论</div>
    </div>
  </div>
</template>

<style scoped>

</style>
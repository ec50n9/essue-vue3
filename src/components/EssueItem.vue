<script setup lang="ts">
const props = defineProps<{ data: MixtureListItem }>()
</script>

<template>
  <div class="card py-4 flex flex-col gap-4">
    <h3 class="text-xl"><span class="tag tag--normal"
                              :class="data.type.class||'tag--blue'">{{ data.type.text || data.type }}</span>
      {{ data.title }}</h3>
    <p v-if="data.preview" class="text-gray-500 tracking-wide">
      <span v-html="data.preview"></span>
    </p>
    <div class="flex items-center gap-3 text-gray-500">
      <div class="tag tag--gray">{{ data.date }}</div>
      <div class="flex-grow"></div>
      <div v-for="tag in data.tags" class="tag tag--red" :class="tag.class || 'tag--blue'">
        {{ tag.text || tag }}
      </div>
      <div class="tag tag--blue">👍 {{ data.voteCount }} 点赞</div>
      <div class="tag tag--yellow">💬 {{ data.commentCount }} 评论</div>
    </div>
  </div>
</template>

<style scoped>

</style>
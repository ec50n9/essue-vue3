<script setup lang="ts">
const props = defineProps<{
  pagination: {
    current: number,
    size: number,
    total: number
  }
}>()

const emit = defineEmits(['onChange'])

const previousPageHandler = () => {
  if (props.pagination.current > 1) {
    emit('onChange', {
      ...props.pagination,
      current: props.pagination.current - 1
    })
  }
}

const nextPageHandler = () => {
  const pageCount = Math.ceil(props.pagination.total / props.pagination.size)
  if (pageCount > props.pagination.current) {
    emit('onChange', {
      ...props.pagination,
      current: props.pagination.current + 1
    })
  }
}

const jumpPageHandler = (pageNum: number) => {
  emit('onChange', {
    ...props.pagination,
    current: pageNum
  })
}
</script>

<template>
  <nav class="py-8 text-center" aria-label="页面导航">
    <ul class="inline-flex -space-x-px">
      <li>
        <a href="#" class="pagination-item rounded-l-lg" @click="previousPageHandler">上一页</a>
      </li>
      <li v-for="i in [...Array(Math.ceil(pagination.total/pagination.size)).keys()]">
        <a href="#" class="pagination-item"
           :class="pagination.current===i+1?'pagination-item--active':''"
           @click="jumpPageHandler(i+1)">{{ i + 1 }}</a>
      </li>
      <li>
        <a href="#" class="pagination-item rounded-r-lg" @click="nextPageHandler">下一页</a>
      </li>
    </ul>
  </nav>

</template>

<style scoped>
.pagination-item {
  @apply py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination-item--active {
  @apply py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white;
}
</style>
<script setup lang="ts">
defineProps<{
  size: 'sm'|'md'|'lg',
  color: 'red'|'gray'|'blue'|'yellow'|'green'
}>()
</script>

<template>
  <div class="tag" :class="[`tag--${size}`, `tag--${color}`]">
    <slot/>
  </div>
</template>

<style scoped>
.tag {
  @apply relative bottom-0.5 inline-block px-2 py-1 rounded-md bg-blue-100 text-blue-500 align-middle cursor-pointer;
}

.tag--sm{
  @apply font-medium text-xs;
}

.tag--md {
  @apply font-normal text-sm;
}

.tag--lg{
  @apply font-normal text-base;
}

.tag--red {
  @apply bg-red-100 text-red-700;
}

.tag--gray {
  @apply bg-gray-100 text-gray-700;
}

.tag--blue {
  @apply bg-blue-100 text-blue-700;
}

.tag--yellow {
  @apply bg-yellow-100 text-yellow-700;
}

.tag--green {
  @apply bg-green-100 text-green-700;
}
</style>
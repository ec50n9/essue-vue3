<script setup lang="ts">
const props = defineProps<{
  type:'primary'|'danger'|'orange',
  pill?:boolean,
  outlined?: boolean
}>()
</script>

<template>
  <button
      class="button" :class="[`button--${type}`, outlined?'button--outlined':'', pill?'button--pill':'']" >
    <slot></slot>
  </button>
</template>

<style scoped>
.button{
  @apply py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none;
}

.button--primary{
  @apply bg-blue-500 text-white active:bg-blue-700;
}

.button--danger{
  @apply bg-red-500 text-white active:bg-red-700;
}

.button--orange{
  @apply bg-orange-500 text-white active:bg-orange-700;
}

.button--green{
  @apply bg-green-500 text-white active:bg-green-700;
}

.button--pill{
  @apply rounded-full;
}

.button--outlined{
  @apply bg-transparent text-blue-500 border-2 border-blue-500 shadow-none active:bg-blue-700 active:text-gray-300;
}
</style>
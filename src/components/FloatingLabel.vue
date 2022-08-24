<script setup lang="ts">
import {computed, defineProps, ref} from "vue";

const props = defineProps<{
  name: string,
  type?: 'filled' | 'outlined' | 'standard',
  modelValue?: any,
  placeHolder: string,
  disabled?: boolean,
  error?: boolean,
  tip?: string,
  cover?:boolean
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="floating-label" :class="[error?'floating-label--error':'']">
    <div class="relative z-0">
      <input :type="cover?'password':'text'" :id="name"
             class="input peer" :class="`input--${(type||'standard')}`"
             placeholder=" " v-model="value" :disabled="disabled"/>
      <label :for="name"
             class="label" :class="[`label--${(type||'standard')}`, disabled?'label--disable':'']">{{ placeHolder }}</label>
    </div>
    <p v-if="tip" id="standard_error_help" class="tip">{{tip}}</p>
  </div>
</template>

<style scoped>
.input{
  @apply block px-2.5 text-sm text-gray-900 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ;
}
.input--filled{
  @apply rounded-t-lg pb-2.5 pt-5 w-full bg-gray-50 dark:bg-gray-700 border-0 border-b-2;
}
.input--outlined{
  @apply pb-2.5 pt-4 w-full bg-transparent rounded-lg border-2;
}
.input--standard{
  @apply px-0 w-full bg-transparent border-0 border-b-2;
}

.label{
  @apply absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75;
}
.label--filled{
  @apply -translate-y-4 top-4 z-10 left-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4;
}
.label--outlined{
  @apply -translate-y-4 top-2 z-10 left-1 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4;
}
.label--standard{
  @apply -translate-y-6 top-3 -z-10 peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6;
}
.label--disable{
  @apply text-gray-400 dark:text-gray-500;
}

.tip{
  @apply mt-2 text-xs text-blue-600 dark:text-blue-400;
}

.floating-label--error .input{
  @apply border-red-600 dark:border-red-500 focus:border-red-600 dark:focus:border-red-500;
}
.floating-label--error .label{
  @apply peer-focus:text-red-600 peer-focus:dark:text-red-500;
}
.floating-label--error .tip{
  @apply text-red-600 dark:text-red-400;
}
</style>
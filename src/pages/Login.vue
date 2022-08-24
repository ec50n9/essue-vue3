<script setup lang="ts">
import Button from "../components/EcButton.vue"
import FloatingLabel from "../components/FloatingLabel.vue";
import {ref} from "vue";

const loginForm = ref({
  username: '',
  password: ''
})

const loginHandler = ()=>{
  console.log(loginForm.value)
}
</script>

<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-8 flex flex-col gap-y-6">
    <div class="">
      <h1 class="mb-2 text-3xl text-gray-700">别来无恙！</h1>
      <p class="text-gray-500">快登录，拿回属于你的一切～</p>
    </div>
    <FloatingLabel name="username" type="outlined" v-model="loginForm.username" place-holder="账号"/>
    <FloatingLabel name="password" type="outlined" v-model="loginForm.password" place-holder="密码" cover/>
    <div>
      <Button type="primary" class="w-full" @click="loginHandler">登录</Button>
      <p class="my-2 text-center text-gray-500 text-sm">没有账号？你可以👇</p>
      <div class="flex gap-4">
        <Button type="primary" class="flex-grow" @click="$router.back()" outlined>取消</Button>
        <Button type="orange" class="flex-grow">注册</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
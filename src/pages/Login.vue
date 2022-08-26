<script setup lang="ts">
import Button from "../components/EcButton.vue"
import FloatingLabel from "../components/FloatingLabel.vue";
import {ref} from "vue";
import Toast from "../components/toast";

const mode = ref<'login' | 'register'>('login')

const loginForm = ref({
  username: '',
  password: ''
})

const loginHandler = () => {
  console.log(loginForm.value)
}
const registerHandler = () => {

}
</script>

<template>
  <div class="bg-wrapper absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
    <!--卡牌容器-->
    <div :class="mode==='register'?'is-flipped':''" class="flip-wrapper w-96">
      <!--登录表单-->
      <div class="flip-a flex flex-col gap-y-6
              p-8 bg-white rounded-lg shadow-xl">
        <div>
          <h1 class="mb-2 text-3xl text-gray-700">别来无恙！</h1>
          <p class="text-gray-500">快登录，拿回属于你的一切～</p>
        </div>
        <FloatingLabel class="bg-white rounded-lg" name="username" type="outlined" v-model="loginForm.username"
                       place-holder="账号"/>
        <FloatingLabel class="bg-white rounded-lg" name="password" type="outlined" v-model="loginForm.password"
                       place-holder="密码" cover/>
        <div>
          <Button type="primary" class="w-full" @click="loginHandler">登录</Button>
          <p class="my-2 text-center text-gray-500 text-sm">没有账号？你可以👇</p>
          <div class="flex gap-4">
            <Button type="primary" class="flex-grow" @click="$router.back()" outlined>取消</Button>
            <Button type="orange" class="flex-grow" @click="mode = 'register'">前往注册</Button>
          </div>
        </div>
      </div>
      <!--注册表单-->
      <div class="flip-b flex flex-col gap-y-6
              p-8 bg-white rounded-lg shadow-xl">
        <div>
          <h1 class="mb-2 text-3xl text-gray-700">初次见面！</h1>
          <p class="text-gray-500">👣 在这里留下你的足迹叭～</p>
        </div>
        <FloatingLabel class="bg-white rounded-lg" name="reg_username" type="outlined" v-model="loginForm.username"
                       place-holder="账号"/>
        <FloatingLabel class="bg-white rounded-lg" name="reg_password" type="outlined" v-model="loginForm.password"
                       place-holder="密码" cover/>
        <FloatingLabel class="bg-white rounded-lg" name="reg_nickname" type="outlined" v-model="loginForm.username"
                       place-holder="昵称"/>
        <div>
          <Button type="orange" class="w-full" @click="loginHandler">注册</Button>
          <p class="my-2 text-center text-gray-500 text-sm">已经有账号啦？你可以👇</p>
          <div class="flex gap-4">
            <Button type="primary" class="flex-grow" @click="mode = 'login'">
              返回登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-wrapper{
  perspective: 1000px;
}

.flip-wrapper {
  @apply relative duration-500 ease-in-out;
  transform-style: preserve-3d;
}

.flip-b {
  @apply absolute inset-x-0 top-0;
  transform: rotateY(-180deg);
}

.flip-a, .flip-b {
  backface-visibility: hidden;
}

.flip-wrapper.is-flipped {
  transform: rotateY(180deg);
}
</style>
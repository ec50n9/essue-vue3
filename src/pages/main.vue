<script lang="ts" setup>
import router from '../router'

const navList = [
  {
    path: '/',
    name: '首页'
  }, {
    path: '/issues',
    name: '问答'
  }, {
    path: '/wiki',
    name: '知识库'
  }, {
    path: '/square',
    name: '广场'
  }, {
    path: '/about',
    name: '关于我们'
  }
]
</script>

<template>
  <header class="sticky top-0 w-full border-b-2 bg-white">
    <!-- 顶部栏 -->
    <div class="container mx-auto flex h-16 items-center gap-4">
      <h1 class="text-xl font-medium">#Essue</h1>
      <div class="flex-grow"></div>
      <div class="search-bar">
        <form>
          <label for="default-search"
                 class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg aria-hidden="true" class="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="search" id="default-search"
                   class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                   placeholder="搜索问题..." required/>
          </div>
        </form>
      </div>
      <!-- 头像 -->
      <RouterLink to="/login">
        <div class="avatar h-11 w-11 rounded-full bg-blue-100"></div>
      </RouterLink>
    </div>
  </header>
  <div class="wrapper container mx-auto flex gap-4">
    <!-- 侧边栏 -->
    <div class="side-bar flex-shrink-0 w-3/12 xl:w-2/12 bg-white">
      <div class="sticky top-16 pt-16">
        <!-- 个人信息卡片 -->
        <div class="mb-8">
          <div class="rounded-lg bg-blue-100 p-4">
            <h3 class="text-gray-500">今日活力：</h3>
            <p class="mt-2 text-center text-xl font-bold text-gray-500">999</p>
          </div>
        </div>
        <!-- 菜单列表 -->
        <ul class="nav">
          <RouterLink v-for="item in navList" :key="item.path" :to="item.path">
            <li class="nav-item" :class="{'nav-item--active': router.options.history.location===item.path}">
              {{ item.name }}
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
    <div class="content flex-grow w-max p-8">
      <RouterView></RouterView>
    </div>
    <!--右侧栏-->
    <div class="hidden xl:block w-2/12 flex-shrink-0">
      <div class="sticky top-16 pt-16 space-y-8">
        <div class="p-8 rounded-lg bg-blue-100">
          <h2 class="text-xl">技术人员</h2>
          <ul>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  @apply flex flex-col space-y-4;
}

.nav-item {
  @apply px-5 py-2 rounded-lg cursor-pointer duration-300 text-gray-500;
}

.nav-item:hover {
  @apply bg-indigo-100;
}

.nav-item--active {
  @apply bg-indigo-100 text-blue-700;
}
</style>
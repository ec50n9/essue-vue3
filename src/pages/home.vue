<template>
    <header class="border-b-2 bg-white">
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
                            placeholder="搜索问题..." required />
                    </div>
                </form>
            </div>
            <!-- 头像 -->
            <div class="avatar h-11 w-11 rounded-full bg-blue-100"></div>
        </div>
    </header>
    <div class="wrapper container mx-auto flex gap-4">
        <!-- 侧边栏 -->
        <div class="side-bar w-96 bg-white">
            <!-- 个人信息卡片 -->
            <div class="my-8">
                <div class="rounded-lg bg-blue-100 p-4">
                    <h3 class="text-gray-500">今日活力：</h3>
                    <p class="mt-2 text-center text-xl font-bold text-gray-500">999</p>
                </div>
            </div>
            <!-- 菜单列表 -->
            <ul class="nav">
                <li class="nav-item nav-item--active">首页</li>
                <li class="nav-item">问答</li>
                <li class="nav-item">知识库</li>
                <li class="nav-item">广场</li>
                <li class="nav-item">关于我们</li>
            </ul>
        </div>
        <div class="content flex-grow p-8">
            <div class="title">
                <h2 class="text-5xl text-gray-700">别来无恙！</h2>
                <p class="mt-4 mb-8 text-lg text-gray-500">快来看看今天有什么新鲜事吧！</p>
            </div>
            <div class="banner h-64 rounded-xl bg-blue-100"></div>
            <ul class="list mt-4">
                <li>
                    <div class="card py-4 flex flex-col gap-4">
                        <h3 class="text-xl"><span
                                class="rounded-md px-2 py-1 bg-blue-100 text-sm text-blue-700 align-middle">文章</span>
                            如何评价全新的 ARC 浏览器，号称要重新定义网页？</h3>
                        <p class="text-gray-500 tracking-wide">
                            少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫
                            网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） <strong>缺点（The bad）</strong>过于美貌（…
                        </p>
                        <div class="flex items-center gap-3 text-gray-500 text-sm">
                            <div class="flex-grow">三天前</div>
                            <div class="px-2 py-1 rounded-md bg-red-100 text-red-500 font-medium">🔥 热门</div>
                            <div class="px-2 py-1 rounded-md bg-blue-100 text-blue-500 font-medium">76 点赞</div>
                            <div class="px-2 py-1 rounded-md bg-yellow-100 text-yellow-500 font-medium">11 评论</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card py-4 flex flex-col gap-4">
                        <h3 class="text-xl"><span
                                class="rounded-md px-2 py-1 bg-red-100 text-sm text-red-700 align-middle">问题</span>
                            如何评价全新的 ARC 浏览器，号称要重新定义网页？</h3>
                        <p class="text-gray-500 tracking-wide">
                            少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫
                            网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） <strong>缺点（The bad）</strong>过于美貌（…
                        </p>
                        <div class="flex items-center gap-3 text-gray-500 text-sm">
                            <div class="flex-grow">两个小时前</div>
                            <div class="px-2 py-1 rounded-md bg-blue-100 text-blue-500 font-medium">76 点赞</div>
                            <div class="px-2 py-1 rounded-md bg-yellow-100 text-yellow-500 font-medium">11 评论</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card py-4 flex flex-col gap-4">
                        <h3 class="text-xl"><span
                                class="rounded-md px-2 py-1 bg-green-100 text-sm text-green-700 align-middle">广场</span>
                            二饭有没有什么好吃的店</h3>
                        <p class="text-gray-500 tracking-wide">
                            少数派： TL;DR <strong>优点（The good）</strong> 对标签过载问题提出了新颖的方案 交互设计细致入微，重引导而非强迫
                            网页修改功能有黑客精神和早期浏览器遗风 非常美貌（取决于你的偏好） <strong>缺点（The bad）</strong>过于美貌（…
                        </p>
                        <div class="flex items-center gap-3 text-gray-500 text-sm">
                            <div class="flex-grow">片刻之前</div>
                            <div class="px-2 py-1 rounded-md bg-blue-100 text-blue-500 font-medium">76 点赞</div>
                            <div class="px-2 py-1 rounded-md bg-yellow-100 text-yellow-500 font-medium">11 评论</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
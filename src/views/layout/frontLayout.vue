<template>
  <div class="flex-row w-full h-full">
    <header class="bg-white shadow items-center origin-center place-content-center">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav class="flex relative flex-warp">
          <!-- <ul class="flex flex-wrap pr-10 pl-40 gap-5 mb-1 mt-1 list-none">
            <router-link to="/welcome" class="relative m-0 text-center content-between">
              <li class="flex-1 relative m-0 text-center">
                <img src="../../../public/logo-circle.png" style="height: 20px" alt="" />
              </li>
              <li class="flex-1 relative m-0 text-center">
                <p>املاک نخست</p>
              </li>
            </router-link>
          </ul> -->

          <ul class="flex flex-wrap pr-10 pl-40 gap-5 mb-1 mt-1 list-none">
            <li class="relative m-0 text-center">
              <router-link to="/wlecome">خانه</router-link>
            </li>
            <li class="relative m-0 text-center">
              <router-link to="/wlecome">درباره ما</router-link>
            </li>
            <li class="relative m-0 text-center">
              <router-link to="/wlecome">تماس با ما </router-link>
            </li>
            <li class="relative m-0 text-center">
              <router-link to="/wlecome">تماس با ما </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="w-full h-full">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

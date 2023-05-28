<script setup>
import welcomefront from "../../../../components/TheWelcomeFront.vue";
</script>

<template>
  <main>
    <div class="max-w-7xl mx-auto p-6 lg:p-8">
      <div class="flex justify-center">
        <img src="../../../../../public/logo-circle.png" style="height: 50px;" alt="logo">
      </div>
      <div class="mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <welcomefront />
        </div>
      </div>
      <div class="flex justify-center mt-16 px-0 sm:items-center sm:justify-between">
        <div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
          نسخه برنامه 1.0
        </div>
      </div>
    </div>

  </main>
</template>
<script>
export default {};
</script>

<style></style>

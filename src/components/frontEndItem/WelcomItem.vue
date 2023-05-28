<template>
  <div>
    <div>
      <div class="h-16 w-16 bg-red-50 flex items-center justify-center rounded-full">
        <!-- <i class="fa-solid fa-blog fa-xl" style="color: #cc480f"></i> -->
        <slot name="icon"> </slot>
      </div>
      <h2 class="mt-6 text-xl font-semibold text-gray-900">
        <slot name="heading"></slot>
      </h2>
      <div class="flex">
        <div class="flex-grow">
          <p class="mt-4 text-gray-500 text-sm leading-relaxed">
            <slot name="detail"></slot>
          </p>
        </div>
        <div class="flex-1">
          <font-awesome-icon icon="fa-solid fa-arrow-left" color="#F05116" />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>

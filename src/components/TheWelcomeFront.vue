<script setup>
import WelcomeItem from "./frontEndItem/WelcomItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import leftarrow from "./icons/leftArrow.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <router-link
    to="/login"
    class="scale-100 p-6 bg-white from-gray-700/50 via-transparent rounded-lg shadow-2xl shadow-gray-500/20 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
  >
    <WelcomeItem>
      <template #heading> ورود به سامانه </template>
      <template #detail>
        با استفاده از نام کاربری و رمز می توانید وارد سامانه شوید. اگر نام کاربری و رمز
        عبور ندارید با مدیریت سیستم تماس بگیرید.
      </template>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-right-to-bracket" color="#F05116" size="xl" />
      </template>
    </WelcomeItem>
  </router-link>
  <router-link
    to="/aboutus"
    class="scale-100 p-6 bg-white from-gray-700/50 via-transparent rounded-lg shadow-2xl shadow-gray-500/20 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
  >
    <WelcomeItem>
      <template #heading> آخرین تغییرات سامانه </template>
      <template #detail>
        در این قسمت آخرین اخبار مرتبط با تغییرات سامانه و رفع باگ های سامانه را مشاهده می
        کنید.
      </template>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-bolt" color="#F05116" size="xl" />
      </template>
    </WelcomeItem>
  </router-link>
  <router-link
    to="/help"
    class="scale-100 p-6 bg-white from-gray-700/50 via-transparent rounded-lg shadow-2xl shadow-gray-500/20 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
  >
    <WelcomeItem>
      <template #heading> راهنمای سامانه </template>
      <template #detail>
        در این قسمت راهنمای نحوه کار با سامانه قرار گرفته است، شما می توانید با مراجعه به
        این قسمت نحوه کار با سامانه را آموزش ببینید. اگر نظر یا پیشنهادی در این رابطه
        داشتید می توانید با مراجعه به بخش ارسال نظرات و پیشنهادات با ما ارتباط برقرار
        کنید.
      </template>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-circle-info" color="#F05116"  size="xl"/>
      </template>
    </WelcomeItem>
  </router-link>
  <router-link
    to="/ticket"
    class="scale-100 p-6 bg-white from-gray-700/50 via-transparent rounded-lg shadow-2xl shadow-gray-500/20 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
  >
    <WelcomeItem>
      <template #heading> ارسال نظرات و پیشنهاده ها </template>
      <template #detail>
        نظرات و پیشنهادات خود را در رابطه با ظاهر و نحوه کار سامانه برای ما ارسال کنید.
      </template>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-ticket" color="#F05116" size="xl" />
      </template>
    </WelcomeItem>
  </router-link>
</template>

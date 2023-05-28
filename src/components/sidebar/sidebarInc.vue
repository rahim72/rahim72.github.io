<script setup>
import { onMounted, ref, computed } from 'vue'
import {
  initCollapses,
} from 'flowbite'

const now = computed(() => Date.now())
const leftArrowDashboard = ref(true)
const leftArrowRegister = ref(true)
const leftArrowSearch = ref(true)
const leftArrowPerson = ref(true)
const leftArrowForm = ref(true)
const leftArrowSms = ref(true)
const leftArrowCalandar = ref(true)
const leftArrowReport = ref(true)
const leftArrowAccounting = ref(true)
const leftArrowSetting = ref(true)

// initialize components based on data attribute selectors
onMounted(() => {
  initCollapses();
})
</script>


<template>
  <aside class="top-0 left-0 z-40 w-[320px] transition-transform -translate-x-full sm:translate-x-0">
    <RouterLink to="/admin">
      <div class="flex gap-2 mt-3 mb-3 text-center items-center justify-center">
        <img class="h-4 w-4" src="/logo-circle.png" />
        <span> سامانه املاک </span>
      </div>
    </RouterLink>
    <div class="my-2 bg-gray-600 h-[2px]"></div>

    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <nav>
        <ul class="space-y-2 font-medium cursor-pointer" data-widget="treeview" role="menu" data-accordion="false">
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!-- Dashboard  -->
          <li class="justify-center text-center block">
            <button @click="leftArrowDashboard = !leftArrowDashboard" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-dashboard" data-collapse-toggle="dropdown-dashboard">

              <font-awesome-icon icon="fa-solid fa-gauge-high" class="w-[30px] h-[30px]" />

              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                پیشخوان
              </span>
              <!-- Icon Arrow  -->
              <font-awesome-icon v-if="leftArrowDashboard" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!--/Icon Arrow  -->
            </button>
            <ul id="dropdown-dashboard" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-user" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    پروفایل
                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-universal-access" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    مدیریت دسترسی

                  </span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    تنظیمات
                  </span>
                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!-- Sabte Darkhast  -->
          <li class="justify-center text-center block">
            <button @click="leftArrowRegister = !leftArrowRegister" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-sabte" data-collapse-toggle="dropdown-sabte">

              <font-awesome-icon icon="fa-solid fa-circle-plus" class="w-[30px] h-[30px]" />

              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                ثبت درخواست
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowRegister" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-sabte" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="/admin/request/addRahnVaEjare"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-house-chimney-medical" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    ثبت رهن و اجاره

                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="/admin/request/addhouse"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-building-user" class="w-[26px] h-[26px]" />

                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    ثبت فروش ملک
                  </span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/admin/request/addland"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-earth-asia" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    ثبت فروش زمین
                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="/admin/request/addRequestCustomer"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-square-plus" class="w-[26px] h-[26px]" />

                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    ثبت درخواست مشتری
                  </span>
                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!--  Search  -->
          <li class="justify-center text-center block">
            <button @click="leftArrowSearch = !leftArrowSearch" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-search" data-collapse-toggle="dropdown-search">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-[30px] h-[30px]" />
              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                جستجو
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowSearch" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-search" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass-location" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    جستجو ملک
                  </span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    جستجو شخص
                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-brands fa-searchengin" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    جستجو پیشرفته
                  </span>

                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!-- Add Person  -->
          <li class="justify-center text-center block">
            <button @click="leftArrowPerson = !leftArrowPerson" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-person" data-collapse-toggle="dropdown-person">
              <font-awesome-icon icon="fa-solid fa-person-circle-plus" class="w-[30px] h-[30px]" />

              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                ثبت اشخاص
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowPerson" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-person" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-user-plus" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    افزودن شخص
                  </span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-users" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    همه اشخاص
                  </span>
                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!-- Form: -->
          <li class="justify-center text-center block">
            <button @click="leftArrowForm = !leftArrowForm" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-form" data-collapse-toggle="dropdown-form">

              <font-awesome-icon icon="fa-solid fa-table-columns" class="w-[30px] h-[30px]" />
              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                فرم ها
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowForm" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-form" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-table-columns" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    فرم شماره 1
                  </span>

                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!-- SMS Panel  -->
          <li class="justify-center text-center block">
            <button @click="leftArrowSms = !leftArrowSms" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-sms" data-collapse-toggle="dropdown-sms">
              <font-awesome-icon icon="fa-solid fa-comment-sms" class="w-[30px] h-[30px]" />
              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                پنل پیامکی
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowSms" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-sms" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-gauge-high" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    پیشخوان
                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">

                  <font-awesome-icon icon="fa-solid fa-plus" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    ارسال پیامک
                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-inbox" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    صندوق پیامک
                  </span>

                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-gear" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    تنظیمات پنل
                  </span>

                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->
          <!-- Calendar -->
          <li class="justify-center text-center block">
            <button @click="leftArrowCalandar = !leftArrowCalandar" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-calendar" data-collapse-toggle="dropdown-calendar">
              <font-awesome-icon icon="fa-solid fa-calendar-days" class="w-[30px] h-[30px]" />

              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                تقویم
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowCalandar" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-calendar" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-calendar-plus" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    افزودن رویداد
                  </span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-calendar-plus" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    همه رویداد ها
                  </span>
                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- --------------------------------------------------------------------------------------------------------------------- -->

          <!-- Report -->
          <li class="justify-center text-center block">
            <button @click="leftArrowReport = !leftArrowReport" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-report" data-collapse-toggle="dropdown-report">
              <font-awesome-icon icon="fa-solid fa-chart-simple" class="w-[30px] h-[30px]" />
              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                گزارشات
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowReport" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-report" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-ranking-star" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    همه گزارشات
                  </span>
                </RouterLink>
              </li>

            </ul>
          </li>
          <!-- Accounting -->
          <li class="justify-center text-center block">
            <button @click="leftArrowAccounting = !leftArrowAccounting" type="button"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-accounting" data-collapse-toggle="dropdown-accounting">
              <font-awesome-icon icon="fa-solid fa-money-bill-trend-up" class="w-[30px] h-[30px]" />

              <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                امور مالی
              </span>
              <!-- Arrow Icon -->
              <font-awesome-icon v-if="leftArrowAccounting" icon="fa-solid fa-angle-left" />
              <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
              <!-- /Arrow Icon -->
            </button>
            <ul id="dropdown-accounting" class="hidden py-2 space-y-2 mr-5">
              <li>
                <RouterLink to="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <font-awesome-icon icon="fa-solid fa-building-columns" class="w-[26px] h-[26px]" />
                  <span class="flex-1 mr-3 text-right whitespace-nowrap" sidebar-toggle-item>
                    حسابداری
                  </span>
                </RouterLink>
              </li>

            </ul>
          </li>

        </ul>


      </nav>
    </div>
  </aside>
</template>
<script>
import { RouterLink } from 'vue-router';
export default { components: { RouterLink } };


</script>

<style>
.active {

  background-color: #16A4F0;
  border-radius: 10px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)
}
</style>

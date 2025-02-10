<template>
  <nav class="bg-white shadow-md">
    <!-- Desktop Navigation -->
    <div class="container mx-auto h-auto">
      <div class="flex justify-center h-18">
        <!-- Logo -->
        <div class="md:mr-0 lg:ml-2 xl:ml-22">
          <img src="/assets/pic/هدف_تدريب_bg_removed.png.png" alt="Logo" class="h-20" />
        </div>

        <!-- Desktop Menu -->

        <div class="hidden lg:hidden xl:flex items-center space-x-4">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="relative group whitespace-nowrap"
          >
            <div class="text-gray-700 hover:text-primary px-3 py-2">
              <a href="#">
                {{ item.title }}
                <span
                  v-if="!item.isNew"
                  class="mr-1 absolute top-4 text-[10px] font-medium text-red-500"
                  >جديد</span
                >
                <span
                  v-else
                  class="mr-1 absolute top-4.5 text-[8px] text-grey-900"
                  >▼</span
                >
              </a>
            </div>
            <div
              class="hidden group-hover:block before:absolute before:top-10 before:left-4 before:right-3 before:h-1 before:bg-green-500"
            ></div>
            <div
              v-if="item.title === 'المسارات التدريبية'"
              class="absolute right-3 top-9 mt-2 bg-white shadow-lg hidden group-hover:block z-20 gap-4 text-right mx-auto"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
                >مسارات التدريب</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
                >مسارات التوطين</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
                >مسارات القطاعات</a
              >
            </div>
            <div
              v-if="item.title === 'الدورات التدريبية'"
              class="absolute right-3 top-9 mt-2 bg-white shadow-lg hidden group-hover:block z-20 gap-4 text-right w-[600px] mx-auto"
            >
              <h2 class="text-green-500 p-4 font-semibold">التخصصات المتوفرة</h2>
              <hr class="text-gray-400 font-light" />
              <div class="grid grid-cols-3 p-4 text-xs">
                <!-- Column 1 -->
                <div class="space-y-2">
                  <ul class="space-y-2">
                    <li>
                      <a href="#" class="block hover:text-[#277b9d]">إدارة الاعمال</a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-[#277b9d]">اللغات</a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-[#277b9d]">المالية والمحاسبة</a>
                    </li>
                    <li>
                      <a href="#" class="block hover:text-[#277b9d]"
                        >البيانات و التحليلات</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- Column 2 -->
                <div class="space-y-2">
                  <a href="#" class="block hover:text-[#277b9d]">
                    التقنية و علوم الحاسب الآلي
                  </a>
                  <a href="#" class="block hover:text-[#277b9d]">
                    الفنون والعلوم الانسانية
                  </a>
                  <a href="#" class="block hover:text-[#277b9d]"> المهارات الوظيفية </a>
                  <a href="#" class="block hover:text-[#277b9d]"> مهارات تطوير الذات </a>
                </div>

                <!-- Column 3 -->
                <div class="space-y-2">
                  <a href="#" class="block hover:text-[#277b9d]"> الصحة </a>
                  <a href="#" class="block hover:text-[#277b9d]"> السياحة والترفيه </a>
                  <a
                    href="#"
                    class="block items-center justify-between text-[#428bca] font-medium text-sm"
                  >
                    <span class="font-bold">جميع التخصصات</span>
                    <span class="text-lg mr-1">›</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden lg:hidden xl:flex p-4 space-x-2 w-auto text-sm">
          <button
            class="rounded-full bg-[#277b9d] text-white hover:bg-[#15293F] transition-colors pr-5 pl-5 mr-30 whitespace-nowrap"
          >
            إنشاء حساب
          </button>
          <button
            class="rounded-full border border-[#277b9d] text-[#277b9d] hover:bg-[#277b9d] hover:text-white pr-5 pl-5 whitespace-nowrap"
          >
            تسجيل الدخول
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:flex xl:hidden flex mr-auto">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900">
         <x v-if="!isMenuOpen" class="stroke-4"/>
         <Menu v-else class="stroke-3"/>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden font-medium">
      <div class="fixed inset-0 bg-white z-50 top-50">
        <div class="p-4">
          <!-- Mobile Auth Buttons -->
          <div class="mt-8 space-y-2.5 text-sm">
            <button
              class="text-[#247190] w-full border border-gray-300 px-4 py-2 rounded-full"
            >
              تسجيل الدخول
            </button>
            <button
              class="text-[#247190] w-full border border-gray-300 px-4 py-2 rounded-full"
            >
              إنشاء حساب
            </button>
          </div>

          <!-- Mobile Menu Items -->
          <div
            class="space-y-2">
            <MenuItem
              v-for="(item, index) in menuItems"
              :key="index"
              :item="item"
              :index="index"
              :activeIndex="activeIndex"
              :setActive="setActive"
            />
            <MenuItem
              v-for="(item, index) in secondaryMenuItems"
              :key="'secondary-' + index"
              :item="item"
              :index="index"
              :activeIndex="activeSecondaryIndex"
              :setActive="setActiveSecondary"
            />
          </div>
          <div class="flex justify-center gap-4 flex-row-reverse py-10">
            <a href="#">
              <img src="../../assets/pic/instagramIcon.png" />
            </a>
            <a href="#" class="text-gray-500">
              <img src="../../assets/pic/twitter.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-700">
              <img src="../../assets/pic/linkedinIcon.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
import { X } from 'lucide-vue-next';
import { Menu } from 'lucide-vue-next';

const isMenuOpen = ref(false);
const activeIndex = ref(null);
const activeSecondaryIndex = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setActive = (index) => {
  activeIndex.value = index;
  activeSecondaryIndex.value = null;
};

const setActiveSecondary = (index) => {
  activeSecondaryIndex.value = index;
  activeIndex.value = null;
};

const menuItems = [
  { title: "الدورات التدريبية", isNew: false },
  { title: "الجلسات", isNew: true },
  { title: "المسارات التدريبية", isNew: false },
  { title: "دورات الشركاء", isNew: true },
  { title: "البرامج المدعومة", isNew: true },
];

const secondaryMenuItems = [
  { title: "عن التدريب الإلكتروني" },
  { title: "تحقق" },
  { title: "الأسئلة الشائعة" },
  { title: "إتصل بنا" },
  { title: "دليل المستخدم" },
];
</script>

<style scoped>
a:hover + .hover-target {
  display: block;
}

nav {
   font-family:'Tajawal', sans-serif;
}
</style>

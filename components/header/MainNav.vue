<template>
  <nav class="bg-white shadow-md">
    <!-- Desktop Navigation -->
    <div class="container mx-auto h-auto">
      <div class="flex justify-between h-18">
        <!-- Logo -->
        <div class="md:mr-0 lg:ml-2 xl:ml-12">
          <a href="/ar/">
            <img src="/assets/pic/هدف_تدريب_bg_removed.png.png" alt="Logo" class="h-20" />
          </a>
        </div>

        <!-- Desktop Menu -->

        <div class="hidden lg:hidden xl:flex items-center space-x-4">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="relative group whitespace-nowrap"
          >
            <div class="text-gray-600 hover:text-primary px-10 py-2">
              <a :href="item.href">
                {{ item.title }}
                <span
                  v-if="item.isNew"
                  class="absolute top-2 -right-3 font-medium text-[#085D3A] bg-[#ECFDF3] rounded-2xl px-2 border-1 border-[#ABEFC6]"
                  >جديد</span
                >
                <span v-else class="mr-1 absolute top-4.5 text-[8px] text-grey-900">
                  ▼
                </span>
              </a>
            </div>
            <div
              class="hidden group-hover:block before:absolute before:top-10 before:left-4 before:right-3 before:h-1 before:bg-[#57ad46]"
            ></div>
            <div
              v-if="item.title === 'المسارات التدريبية'"
              class="absolute right-3 top-9 mt-2 bg-white shadow-lg hidden group-hover:block z-20 gap-4 text-right mx-auto"
            >
              <a
                href="/ar/individuals/public/public_programs_list/"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
                >مسارات التدريب</a
              >
              <a
                href="/individuals/tawteen/tawteen_program_list/"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
                >مسارات التوطين</a
              >
              <a
                href="/ar/individuals/sector/sectors_program_list/"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-[#277b9d]"
                >مسارات القطاعات</a
              >
            </div>
            <div
              v-if="item.title === 'الدورات التدريبية'"
              class="absolute right-3 top-9 mt-2 bg-white shadow-lg hidden group-hover:block z-20 gap-4 text-right w-[600px] mx-auto"
            >
              <h2 class="text-[#57ad46] p-4 font-semibold">التخصصات المتوفرة</h2>
              <hr class="text-gray-200" />
              <div class="grid grid-cols-3 p-4 text-xs text-gray-500">
                <!-- Column 1 -->
                <div class="space-y-2">
                  <ul class="space-y-2">
                    <li>
                      <a
                        href="/ar/individuals/elearning/?category=إدارة%20الاعمال"
                        class="block hover:text-[#277b9d]"
                        >إدارة الاعمال</a
                      >
                    </li>
                    <li>
                      <a
                        href="/ar/individuals/elearning/?category=اللغات"
                        class="hover:text-[#277b9d]"
                        >اللغات</a
                      >
                    </li>
                    <li>
                      <a
                        href="/ar/individuals/elearning/?category=المالية%20والمحاسبة"
                        class="hover:text-[#277b9d]"
                        >المالية والمحاسبة</a
                      >
                    </li>
                    <li>
                      <a
                        href="/ar/individuals/elearning/?category=البيانات%20و%20الإحصاءات"
                        class="block hover:text-[#277b9d]"
                        >البيانات و التحليلات</a
                      >
                    </li>
                  </ul>
                </div>

                <!-- Column 2 -->
                <div class="space-y-2">
                  <a
                    href="/ar/individuals/elearning/?category=التقنية%20و%20علوم%20الحاسب%20الالي"
                    class="block hover:text-[#277b9d]"
                  >
                    التقنية و علوم الحاسب الآلي
                  </a>
                  <a
                    href="/ar/individuals/elearning/?category=الفنون%20والعلوم%20الانسانية"
                    class="block hover:text-[#277b9d]"
                  >
                    الفنون والعلوم الانسانية
                  </a>
                  <a
                    href="/ar/individuals/elearning/?category=المهارات%20الوظيفية"
                    class="block hover:text-[#277b9d]"
                  >
                    المهارات الوظيفية
                  </a>
                  <a
                    href="/ar/individuals/elearning/?category=مهارات%20تطوير%20الذات"
                    class="block hover:text-[#277b9d]"
                  >
                    مهارات تطوير الذات
                  </a>
                </div>

                <!-- Column 3 -->
                <div class="space-y-2">
                  <a
                    href="/ar/individuals/elearning/?category=الصحة"
                    class="block hover:text-[#277b9d]"
                  >
                    الصحة
                  </a>
                  <a
                    href="/ar/individuals/elearning/?category=السياحة%20والترفيه"
                    class="block hover:text-[#277b9d]"
                  >
                    السياحة والترفيه
                  </a>
                  <a
                    href="/ar/individuals/elearning/"
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
        <div class="hidden lg:hidden xl:flex p-4 space-x-2 w-auto text-sm items-center">
          <div class="relative inline-block">
            <div class="flex space-x-5 mr-20 items-center">
              <div class="flex items-center">
                <UserRound class="w-6 h-6 text-gray-600" />
                الافراد
                <ChevronDown />
              </div>
              <div class="flex items-center space-x-1.5">
                <BriefcaseBusiness class="w-6 h-6 text-gray-600" />
                المنشآت
                <ChevronDown />
              </div>
            </div>
            <div
              id="bell-dropdown"
              v-if="isBellOpen && !user.verified"
              class="absolute right-17 top-7 mt-2 w-55 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-20"
            >
              <ul class="text-right text-gray-700 space-y-2 mt-2">
                <li
                  class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg whitespace-nowrap"
                >
                  <p>لم يتم توثيق حسابك</p>
                  <p><a href="" class="text-[#277b9d]"> اضغط هنا </a> لتوثيق بريدك</p>
                  الالكتروني
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:flex xl:hidden flex mr-auto">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900">
            <x v-if="isMenuOpen" class="stroke-4" />
            <Menu v-else class="stroke-3" />
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
              v-if="!isLoggedIn"
              class="text-green-700 w-full px-4 py-2 rounded-full"
            >
              تسجيل الدخول
            </button>
            <button
              v-if="!isLoggedIn"
              class="text-green-700 w-full  px-4 py-2 rounded-full"
            >
              إنشاء حساب
            </button>
            <button
              v-if="isLoggedIn"
              @click="isOpen = !isOpen"
              class="flex items-center justify-between gap-2 p-2 bg-[#277b9d] text-white rounded-md w-full"
            >
              <div class="contents -space-x-1">
                <span class="font-medium text-[1.1rem] p-1">{{ user.name }}</span>
                <span class="text-[8px] p-1">▼</span>
              </div>
            </button>
            <div
              v-if="isOpen"
              class="bg-white rounded-sm shadow-lg border border-gray-200 p-2 z-20 -my-3 mb-2"
            >
              <div class="flex items-center space-x-5 p-2 mr-2">
                <span class="text-gray-700 font-medium">{{
                  user.menuItems[0].text
                }}</span>
                <span
                  v-if="!user.verified"
                  class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                >
                  غير موثق
                </span>
              </div>
              <ul class="text-right text-gray-700 space-y-2 mt-2">
                <li
                  v-for="item in user.menuItems.slice(1)"
                  :key="item.id"
                  class="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium"
                  :class="item.class"
                >
                  {{ item.text }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Mobile Menu Items -->
          <div class="space-y-2">
            <MenuItem
              v-for="(item, index) in menuItems"
              :key="index"
              :item="item"
              :index="index"
              :activeIndex="activeIndex"
              :setActive="setActive"
              :href="item.href"
            />
            <MenuItem
              v-for="(item, index) in secondaryMenuItems"
              :key="'secondary-' + index"
              :item="item"
              :index="index"
              :activeIndex="activeSecondaryIndex"
              :setActive="setActiveSecondary"
              :href="item.href"
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
    <title-banner />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
import { X } from "lucide-vue-next";
import { Menu } from "lucide-vue-next";
import { UserRound } from "lucide-vue-next";
import { ChevronDown } from "lucide-vue-next";
import { BriefcaseBusiness } from "lucide-vue-next";
import TitleBanner from "../header/TitleBanner";

const isMenuOpen = ref(false);
const activeIndex = ref(null);
const activeSecondaryIndex = ref(null);

const isOpen = ref(false);
const isBellOpen = ref(false);

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
  { title: "الدورات التدريبية", isNew: false, href: "/ar/individuals/elearning/" },
  { title: "الجلسات", isNew: true, href: "/ar/doroob_webinar/" },
  { title: "المسارات التدريبية", isNew: false, href: "#" },
  { title: "دورات الشركاء", isNew: true, href: "/ar/individuals/partners" },
  {
    title: "البرامج المدعومة",
    isNew: true,
    href: "/ar/individuals/trainingProgram/programs_list/",
  },
];

const secondaryMenuItems = [
  { title: "عن التدريب الإلكتروني", href: "/ar/individuals/about/" },
  { title: "تحقق", href: "/ar/individuals/check_certificate/" },
  { title: "الأسئلة الشائعة", href: "/ar/individuals/faqs/" },
  {
    title: "إتصل بنا",
    href: "https://www.hrdf.org.sa/help-support/contact-us-dashboard/",
  },
  { title: "دليل المستخدم", href: "/static/media/user_manuals/indi_manual_n01AdYo.pdf" },
];

// Mock user data (Replace later with API)
const user = ref({
  name: "SIT", // Replace with dynamic API data
  verified: false, // Set true when user is verified
  isAuthenticated: false, // Change to true when user logs in
  menuItems: [
    { id: 1, text: "ملفي الشخصي" },
    { id: 2, text: "الدورات المسجل بها" },
    { id: 3, text: "الذهاب الى إيديكس ستوديو" },
    { id: 4, text: "البرامج التدريبية المسجل بها" },
    { id: 5, text: "الجلسات المسجل بها" },
    //add link href without id
    { id: 6, text: "الخروج" }, // Logout
  ],
});

const isLoggedIn = computed(() => user.value.isAuthenticated);
</script>

<style scoped>
a:hover + .hover-target {
  display: block;
}

nav {
  font-family: "Tajawal", sans-serif;
}
</style>

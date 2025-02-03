<template>
  <nav class="bg-white shadow-md ">
    <!-- Desktop Navigation -->
    <div class="container mx-auto h-auto">
      <div class="flex justify-center h-18 ">
        <!-- Logo -->
        <div class=" md:mr-0 lg:ml-2 xl:ml-22">
          <img src="/assests/pic/هدف_تدريب_bg_removed.png.png" alt="Logo" class="h-20 " />
        </div>

        <!-- Desktop Menu -->

        <div class="hidden lg:flex items-center space-x-2">
          <div v-for="(item, index) in menuItems" :key="index" class="relative group whitespace-nowrap">
            <a href="#" class="text-gray-700 hover:text-primary px-3 py-2 ">
              {{ item.title }}
              <span v-if="item.isNew" class="absolute top-4 left-0 text-xs text-red-500">جديد</span>
            </a>
              <div class="hidden group-hover:block before:absolute before:top-10 before:left-4 before:right-3 before:h-1 before:bg-green-500"></div>
              <div 
      v-if="item.title === 'المسارات التدريبية'" 
      class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block top-10 z-20"
    >
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">مسارات التدريب</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">مسارات التوطين</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">مسارات القطاعات</a>
    </div>
              <div 
      v-if="item.title === 'الدورات التدريبية'" 
      class="absolute right-3 top-9 mt-2  bg-white shadow-lg  hidden group-hover:block  z-20 gap-4 text-right w-[600px] mx-auto"
    >
    <h2 class="text-green-500 p-4">التخصصات المتوفرة</h2>
    <hr class="text-gray-400 font-light" />
    <div class="grid grid-cols-3 p-4 text-xs">
  <!-- Column 1 -->
  <div class="space-y-2">
  <ul class="space-y-2">
    <li>
      <a href="#" class="block">إدارة الاعمال</a>
    </li>
    <li>
      <a href="#">اللغات</a>
    </li>
    <li>
      <a href="#">المالية والمحاسبة</a>
    </li>
    <li>
      <a href="#" class="block">البيانات و التحليلات</a>
    </li>
  </ul>
</div>

  <!-- Column 2 -->
  <div class="space-y-2">
    <a href="#" class="block ">
      التقنية و علوم الحاسب الآلي
    </a>
    <a href="#" class="block ">
      الفنون والعلوم الانسانية
    </a>
    <a href="#" class="block ">
      المهارات الوظيفية
    </a>
    <a href="#" class="block ">
      مهارات تطوير الذات
    </a>
  </div>

  <!-- Column 3 -->
  <div class="space-y-2">
    <a href="#" class="block ">
      الصحة
    </a>
    <a href="#" class="block ">
      السياحة والترفيه
    </a>
    <a href="#" class="block items-center justify-between text-[#428bca] font-medium text-base">
      <span>جميع التخصصات</span>
      <span class="text-lg">›</span>
    </a>
  </div>
</div>

    </div>
          </div>
        </div>
        
            

        <!-- Auth Buttons -->
        <div class="hidden lg:flex p-4 space-x-2 w-auto font-semibold">
          <button class="rounded-full bg-[#277b9d] text-white hover:bg-[#15293F] transition-colors pr-5 pl-5 mr-30 whitespace-nowrap">إنشاء حساب</button>
          <button class="rounded-full border border-[#277b9d] text-[#277b9d] hover:bg-[#277b9d] hover:text-white pr-5 pl-5 whitespace-nowrap">تسجيل الدخول</button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex mr-auto">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 bg-white z-50 top-50">
        <div class="p-4">
         

 <!-- Mobile Auth Buttons -->
 <div class="mt-8 space-y-2.5">
              <button class="text-[#247190] w-full border border-gray-300 px-4 py-2 rounded-full">إنشاء حساب</button>
              <button class="text-[#247190] w-full border border-gray-300 px-4 py-2 rounded-full ">تسجيل الدخول</button>
            </div>

          <!-- Mobile Menu Items -->
          <div class="space-y-2" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
            <div v-for="(item, index) in menuItems" :key="index" class="relative">
              <a href="#" class="block text-gray-700 hover:text-primary py-2 text-right">
                {{ item.title }}
                <span v-if="item.isNew" class="text-xs text-red-500">جديد</span>
              </a>
              <hr class="text-gray-400 font-light" />
            </div>

            <!-- Secondary Menu Items -->
            <div v-for="(item, index) in secondaryMenuItems" :key="'secondary-'+index">
              <a href="#" class="block text-gray-600 hover:text-primary py-2 text-right"> 
                {{ item }}
              </a>
              <hr class="text-gray-400 font-light" />
            </div>

          </div>
          <div class="flex  justify-center  gap-4 flex-row-reverse py-10">
          <a href="#">
            <img  src="../../assests/pic/instagramIcon.png" />
          </a>
          <a href="#" class="text-gray-500">
            <img src="../../assests/pic/twitter.png" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <img src="../../assests/pic/linkedinIcon.png" />
          </a>
        </div>
        </div>
      </div>
     
    </div>
  </nav>
</template>

<script setup >
import { ref } from 'vue';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-vue-next'


const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = [
  { title: 'الدورات التدريبية', isNew: false },
  { title: 'الجلسات', isNew: true },
  { title: 'المسارات التدريبية', isNew: false },
  { title: 'دورات الشركاء', isNew: true },
  { title: 'البرامج المدعومة', isNew: true },
];

const secondaryMenuItems = [
  'عن التدريب الإلكتروني',
  'تحقق',
  'الأسئلة الشائعة',
  'إتصل بنا',
  'دليل المستخدم',
];
</script>

<style scoped>
a:hover + .hover-target {
display: block;
}

nav{
    font-family:  Arial, Tahoma, sans-serif;
}


</style>
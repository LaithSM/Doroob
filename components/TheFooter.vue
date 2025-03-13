<template>
  <div
    id="visitor_count_date"
    class="flex justify-between px-4 py-2 text-sm mx-25 text-gray-700"
  >
    <div>
      تاريخ آخر تعديل : الأحد 08 سبتمبر 2024 - 19 ربيع الآخر 1446 - 4:13 م بتوقيت السعودية
    </div>
    <div>
      عدد الزيارات :
      <span class="text-green-700">{{ visitCount }} </span>
    </div>
  </div>
  <footer class="bg-white border-t-2 border-green-700">
    <div
      id="rating_section"
      class="flex flex-wrap justify-between items-center px-4 py-3 text-sm mx-25 text-gray-700"
    >
      <div class="flex items-center gap-2">
        <div>هل كانت هذه الصفحة مفيدة؟</div>
        <button class="bg-green-700 text-white px-4 py-1 rounded w-9flex justify-center">
          <span class="text-xs">نعم</span>
        </button>
        <button class="bg-green-700 text-white px-4 py-1 rounded w-9">
          <span class="text-xs">لا</span>
        </button>
      </div>
      <div class="flex items-center gap-2">
        <div>التقييم</div>
        <div class="flex text-xxs gap-1">
          <StarIcon
            class="w-6 h-6 text-green-700 fill-green-700"
            v-for="i in 4"
            :key="i"
          />
          <StarIcon class="w-6 h-6 text-gray-300 fill-gray-300" />
        </div>
        <div>
          النتيجة <span class="text-green-700">3.5</span> من
          <span class="text-green-700">2</span> مُقيّم
        </div>
        <button class="bg-gray-900 text-white px-4 py-1 rounded">نتائج التقييم</button>
      </div>

      <div class="flex items-center gap-2">
        <div>التعليقات (<span class="text-green-700 font-bold">2</span>)</div>
        <button class="bg-gray-900 text-white px-4 py-1 rounded">إضافة تعليق</button>
      </div>
    </div>
    <div id="main_footer_content" class="bg-[#074D31] text-white text-sm p-10">
      <div class="container mx-auto px-4 py-1">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="general__over_view" class="text-right">
            <h3 class="text-lg mb-2 pb-1 border-b border-gray-400">نظرة عامة</h3>
            <p class="mb-4 text-xs leading-relaxed">
              برنامج التدريب الإلكتروني هو برنامج مقدم من صندوق تنمية الموارد البشرية
              ويهدف لتطوير المعارف والمهارات لدى الكوادر الوطنية وتمكينهم بما يتوافق مع
              متطلبات سوق العمل السعودي.
            </p>
          </div>

          <div id="quick_links" class="text-right">
            <h3 class="text-lg mb-2 pb-1 border-b border-gray-400">روابط سريعة</h3>
            <ul class="space-y-2 text-xs">
              <li><a href="#" class="hover:underline">عن التدريب الإلكتروني</a></li>
              <li><a href="#" class="hover:underline">إنشاء حساب</a></li>
              <li><a href="#" class="hover:underline">تحقق</a></li>
              <li><a href="#" class="hover:underline">اتصل بنا</a></li>
              <li><a href="#" class="hover:underline">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          <div id="contact_us_accessibilty_tools" class="text-right">
            <h3 class="text-lg mb-2 pb-1 border-b border-gray-400">تواصل معنا</h3>
            <div class="flex justify-start gap-3 mb-8">
              <a href="#" class="border border-white rounded-md p-2 hover:bg-green-800">
                <XIcon class="w-5 h-5" />
              </a>
              <a href="#" class="border border-white rounded-md p-2 hover:bg-green-800">
                <InstagramIcon class="w-5 h-5" />
              </a>
              <a href="#" class="border border-red-100 rounded-md p-2 hover:bg-green-800">
                <LinkedinIcon class="w-5 h-5" />
              </a>
            </div>

            <h3 class="text-lg mb-2 pb-1 border-b border-gray-400">أدوات الإتاحة والوصول</h3>
            <div class="flex justify-start gap-3">
              <a href="#" class="border border-white rounded-md p-2 hover:bg-green-800">
                <EyeIcon class="w-5 h-5" />
              </a>
              <a href="#" class="border border-white rounded-md p-2 hover:bg-green-800">
                <MicIcon class="w-5 h-5" />
              </a>
              <a href="#" class="border border-white rounded-md p-2 hover:bg-green-800">
                <ZoomIn  class="w-5 h-5" />
              </a>
              <a href="#" class="border border-white rounded-md p-2 hover:bg-green-800">
                <ZoomOut  class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          id="bottom_footer"
          class="mt-10 my-5 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div class="flex flex-col gap-4 text-sm mt-4 md:mt-0">
          <div class="flex items-center gap-4">
            <a href="#" class="hover:underline">سياسة الخصوصية</a>
            <a href="#" class="hover:underline">الشروط والأحكام</a>
          </div>
            <div>جميع الحقوق محفوظة © برنامج التدريب الإلكتروني 2024</div>
          </div>
          <div class="flex items-center gap-4">
            <img
              src="../assets/pic/Group.png"
              alt="Saudi Vision 2030"
              class="h-10 w-auto"
            />
            <img
              src="../assets/pic/government-authority.png"
              alt="authority"
              class="h-10 w-auto"
            />
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import {
  Star as StarIcon,
  Linkedin as LinkedinIcon,
  Instagram as InstagramIcon,
  X as XIcon,
  MessageCircle as MessageCircleIcon,
  Eye as EyeIcon,
  Mic as MicIcon,
  ZoomIn,
  ZoomOut,
} from "lucide-vue-next";

const visitCount = ref(1829);
</script>

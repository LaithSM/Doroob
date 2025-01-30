<template>
  <!-- Gradient Line -->
  <div class="h-1 bg-gradient-to-l from-[#FF6B4D] to-[#A0522D]"></div>
  
  <footer class="bg-[#F5F5F5] text-[#666] py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
        <!-- Logo and Copyright Section -->
        <div class="flex flex-col sm:items-center">
          <a href="http://www.hrdf.org.sa/" class="block">
            <img 
              src="../assests/pic/صندوق_تنمية_bg_removed.png.png" 
              alt="Doroob" 
              class="h-16 md:h-20 object-contain"
            />
          </a>
          <div class="space-y-2 text-sm">
            <p>جميع الحقوق محفوظة © برنامج التدريب الإلكتروني 2025</p>
            <ul class="space-y-1">
              <li><a href="#" class="hover:text-black transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" class="hover:text-black transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
        </div>

        <!-- Description Section -->
        <div class="hidden lg:flex text-sm leading-relaxed">
          <p>برنامج التدريب الإلكتروني هو برنامج مقدم من صندوق تنمية الموارد البشرية ويهدف لتطوير المعارف والمهارات لدى الكوادر الوطنية وتمكينهم بما يتوافق مع متطلبات سوق العمل السعودي</p>
        </div>

        <!-- Quick Links Section -->
        <div class="hidden lg:block space-y-4">
          <h2 class="text-lg font-bold">روابط سريعة</h2>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-black transition-colors">عن التدريب الإلكتروني</a></li>
            <li><a href="#" class="hover:text-black transition-colors">إنشاء حساب</a></li>
            <li><a href="#" class="hover:text-black transition-colors">تحقق</a></li>
            <li><a href="#" class="hover:text-black transition-colors">اتصل بنا</a></li>
            <li><a href="#" class="hover:text-black transition-colors">الأسئلة الشائعة</a></li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div class="hidden lg:flex  lg:items-center"> 
  <div class="flex items-center gap-4 flex-row-reverse">
    <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors">
      <InstagramIcon class="h-5 w-5" />
    </a>
    <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors">
      <TwitterIcon class="h-5 w-5" />
    </a>
    <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors">
      <LinkedinIcon class="h-5 w-5" />
    </a>
  </div>
</div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-vue-next'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

footer {
  font-family: 'Tajawal', sans-serif;
}
</style>
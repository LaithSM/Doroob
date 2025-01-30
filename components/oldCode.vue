<template>
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a href="/" class="flex-shrink-0">
            <img src="../../assests/pic/هدف_تدريب_bg_removed.png.png" alt="Doroob" class="h-20" />
          </a>
  
          <!-- Main Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <div class="relative group">
            <a href="#" class="group-hover">الدورات التدريبية</a>
              <!-- Dropdown Panel -->
      <div class=" absolute z-20 right-0 top-full mt-1 w-[800px] bg-white shadow-lg rounded-md hidden group-hover:block 
                  before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-green-500">
        <div class="p-6">
          <!-- Grid Container -->
          <div class="grid grid-cols-4 gap-6 text-right">
            <!-- Column 1 -->
            <div class="space-y-3">
              <h3 class="font-semibold text-[#1E3A5F] mb-4">إدارة الاعمال</h3>
              <a href="#" class="block text-gray-600 hover:text-green-500">المالية والمحاسبة</a>
              <a href="#" class="block text-gray-600 hover:text-green-500">البيانات و التحليلات</a>
            </div>
  
            <!-- Column 2 -->
            <div class="space-y-3">
              <h3 class="font-semibold text-[#1E3A5F] mb-4">التقنية و علوم الحاسب الآلي</h3>
              <a href="#" class="block text-gray-600 hover:text-green-500">الفنون والعلوم الانسانية</a>
              <a href="#" class="block text-gray-600 hover:text-green-500">المهارات الوظيفية</a>
              <a href="#" class="block text-gray-600 hover:text-green-500">مهارات تطوير الذات</a>
            </div>
  
            <!-- Column 3 -->
            <div class="space-y-3">
              <h3 class="font-semibold text-[#1E3A5F] mb-4">الصحة</h3>
              <a href="#" class="block text-gray-600 hover:text-green-500">السياحة والترفيه</a>
            </div>
  
            <!-- Column 4 -->
            <div class="space-y-3">
              <h3 class="font-semibold text-[#1E3A5F] mb-4">اللغات</h3>
              <a href="#" class="block text-gray-600 hover:text-green-500 flex items-center">
                <span class="ml-2">جميع التخصصات</span>
                <span class="text-lg">›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
            </div>
            <div class="relative group">
            <a href="#" class="text-gray-700 group-hover">الجلسات <span class="text-xs text-red-500"> جديد </span></a> 
            <div class="hidden group-hover:block before:absolute before:top-12 before:left-4 before:right-3 before:h-1 before:bg-green-500"></div>
            </div>
            <div class="relative group">
            <a href="#" class="text-gray-700 hover:text-[#1E3A5F] group-hover">المسارات التدريبية</a>
            <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block top-10 z-20 before:absolute before:top-0 before:left-4 before:right-0 before:h-1 before:bg-green-500">
          <!-- Dropdown content goes here -->
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">مسارات التدريب</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">مسارات التوطين</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">مسارات القطاعات</a>
        </div>
            </div>
            <div class="relative group">
            <a href="#" class="text-gray-700 hover:text-[#1E3A5F]">دورات الشركاء <span class="text-xs text-red-500"> جديد </span></a>
            <div class="hidden group-hover:block before:absolute before:top-12 before:left-4 before:right-3 before:h-1 before:bg-green-500"></div>
            </div>
            <div class="relative group">
            <a href="#" class="text-gray-700 hover:text-[#1E3A5F]">البرامج المدعومة <span class="text-xs text-red-500"> جديد </span></a>
            <div class="hidden group-hover:block before:absolute before:top-12 before:left-4 before:right-3 before:h-1 before:bg-green-500"></div>
            </div>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex items-center space-x-4 space-x-reverse px-20">
            <button class="px-6 py-2 m-2 rounded-full bg-[#277b9d] text-white hover:bg-[#15293F] transition-colors">
              إنشاء حساب
            </button>
            <button class="px-6 py-2 rounded-full border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#277b9d] hover:text-white transition-colors">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  a:hover + .hover-target {
  display: block;
  }
  </style>
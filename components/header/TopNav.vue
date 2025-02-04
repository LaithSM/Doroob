<template>
  <nav class="bg-[#1c3050] text-white">
    <div class="mx-auto lg:px-8">
      <div class="flex justify-center items-center space-x-10 lg:px-20">
        <div
          id="right_side_links"
          class="hidden md:flex items-center space-x-6 space-x-reverse text-left"
        >
          <a href="#" class="text-sm hover:text-green-600">الصفحة الرئيسية</a>
          <a href="#" class="text-sm hover:text-green-600">التدريب الإلكتروني</a>
          <a href="#" class="text-sm hover:text-green-600">تحقق</a>
          <a href="#" class="text-sm hover:text-green-600">الأسئلة الشائعة</a>
          <a href="#" class="text-sm hover:text-green-600 ml-4">اتصل بنا</a>
          <a href="#" class="text-sm hover:text-green-600">دليل المستخدم</a>
        </div>

        <div id="left_side_items" class="w-full md:w-auto flex">
          <div class="relative w-full md:w-auto">
            <div id="content_container" class="relative flex h-11">
              <button
                class="flex-1 md:flex-initial text-white inline-flex items-center justify-center px-4 font-bold
                       bg-[#318720] hover:bg-[#45a049]
                       md:bg-[#4CAF50] md:hover:bg-[#45a049] md:-skew-x-40"
              >
               <div class="flex md:skew-x-40">
                <img class="h-4 w-4 ml-1 mt-1" src="../../assests/pic/person.png"/>
                الافراد
               </div>
              </button>
              <button
                class="flex-1 md:flex-initial text-sm inline-flex items-center justify-center px-4
                       bg-[#1c3050] hover:bg-[#4CAF50]
                       md:bg-[#33598b] md:hover:bg-[#4CAF50] md:-skew-x-40 font-bold"
              >
                <div class="flex md:skew-x-40">
                <img class="h-4 w-4 ml-1" src="../../assests/pic/suitCase.png" />
                المنشآت
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
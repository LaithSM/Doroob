<template>
  <nav class="bg-[#1c3050] text-white">
    <div class="mx-auto lg:px-8">
      <div class="flex justify-center items-center space-x-10 lg:px-20 lg:mr-80">
        <div
          id="right_side_links"
          class="hidden md:flex items-center space-x-6 space-x-reverse text-left text-xs whitespace-pre"
        >
          <a href="/ar/" class=" hover:text-green-600">الصفحة الرئيسية</a>
          <a href="/ar/individuals/about/" class=" hover:text-green-600">عن التدريب الإلكتروني</a>
          <a href="/ar/individuals/check_certificate/" class=" hover:text-green-600">تحقق</a>
          <a href="/ar/individuals/faqs/" class=" hover:text-green-600">الأسئلة الشائعة</a>
          <a href="https://www.hrdf.org.sa/help-support/contact-us-dashboard/" class=" hover:text-green-600 ml-4">اتصل بنا</a>
          <a href="/static/media/user_manuals/indi_manual_n01AdYo.pdf" class=" hover:text-green-600">دليل المستخدم</a>
        </div>

        <div id="left_side_items" class="w-full md:w-auto flex">
          <div class="relative w-full md:w-auto">
            <div id="content_container" class="relative flex h-10">
              <button
                class="flex-1 md:flex-initial text-white inline-flex items-center justify-center px-4 font-bold
                       bg-[#318720] hover:bg-[#45a049]
                       md:bg-[#4CAF50] md:hover:bg-[#45a049] md:-skew-x-40 md:pr-6"
              >
               <a href="/ar/" class="flex md:skew-x-40">
                <img class="h-4 w-4 ml-1 mt-1" src="../../assets/pic/person.png"/>
                الافراد
               </a>
              </button>
              <button
                class="flex-1 md:flex-initial text-sm inline-flex items-center justify-center px-4
                       bg-[#1c3050] hover:bg-[#4CAF50]
                       md:bg-[#23395f] md:hover:bg-[#4CAF50] md:-skew-x-40 font-bold"
              >
                <a href="/ar/employer/" class="flex md:skew-x-40">
                <img class="h-4 w-4 ml-1" src="../../assets/pic/suitCase.png" />
                المنشآت
                </a>
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